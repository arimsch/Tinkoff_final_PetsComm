import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TuiFileLike } from '@taiga-ui/kit';
import { Observable, Subject, finalize, map, of, switchMap, timer } from 'rxjs';
import { FireStorageService } from 'src/app/core/fire-storage.service';
import { News } from 'src/app/news/models/news';
import { NewsForm } from '../models/news-form';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewsComponent implements OnInit {
  @Output()
  public addNews = new EventEmitter<NewsForm>();

  private _urlPhoto: string | null = null;

  public formNews!: FormGroup;

  public readonly control = new FormControl();

  public readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  public readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  public readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap(file => (file ? this.startLoading(file) : of(null)))
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly fireStorageService: FireStorageService
  ) {}

  ngOnInit(): void {
    this.buildCommentForm();
  }

  private buildCommentForm(): void {
    this.formNews = this.fb.group({
      content: [null],
    });
  }

  public onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  public removeFile(): void {
    this.control.setValue(null);
  }

  public clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  public startLoading(file: TuiFileLike): Observable<TuiFileLike | null> {
    this.loadingFiles$.next(file);
    this.fireStorageService.uploadNewsPhoto(Date.now().toString(), file);
    return timer(7000).pipe(
      map(() => {
        if (this.fireStorageService.url !== null) {
          this._urlPhoto = this.fireStorageService.url;
          return file;
        }

        this.rejectedFiles$.next(file);

        return null;
      }),
      finalize(() => this.loadingFiles$.next(null))
    );
  }

  public sendNews(formNews: FormGroup<any>): void {
    if (this._urlPhoto || formNews.value.content) {
      if (this._urlPhoto) {
        this.addNews.emit({ ...formNews.value, urlNewsPhoto: this._urlPhoto });
        this._urlPhoto = null;
      } else {
        this.addNews.emit({ ...formNews.value });
      }
      this.formNews.reset();
    }
  }
}
