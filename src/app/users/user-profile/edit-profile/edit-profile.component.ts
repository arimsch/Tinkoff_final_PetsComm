import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiFileLike } from '@taiga-ui/kit';
import { Observable, Subject, finalize, map, of, switchMap, timer } from 'rxjs';
import { FireStorageService } from 'src/app/core/fire-storage.service';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';
import { ValidatorsLength } from 'src/app/shared/validators/validators-params';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class EditProfileComponent implements OnInit{
  @Input()
  public userData!: User| null;
  @Output()
  public submitProfile = new EventEmitter<object|null>();

  public profileForm!: FormGroup;
  public formNews!: FormGroup;
  public maxDate = TuiDay.currentLocal();

  public readonly fileControl = new FormControl();

  public readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  public readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  public readonly loadedFiles$ = this.fileControl.valueChanges.pipe(
    switchMap(file => (file ? this.startLoading(file) : of(null)))
  );

  private _urlPhoto: string | null = null;
  private userId:string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly fireStorageService: FireStorageService,
    private readonly userService:UserService
  ) {
    this.userId = this.userService.userId;
  }


  ngOnInit(): void {
    this.buildProfileForm();
  }

  private buildProfileForm(): void {
    this.profileForm = this.fb.group(
      {
        displayName: [
          this.userData?.displayName,
          [
            Validators.required,
            Validators.minLength(ValidatorsLength.MIN_LENGTH_DISPLAY_NAME),
            Validators.maxLength(ValidatorsLength.MAX_LENGTH_DISPLAY_NAME),
          ],
        ],
        dateBth: [
          null,
        ],
        aboutMe: [
          this.userData?.aboutMe || null,
        ],
      }
    );
  }

  public onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  public removeFile(): void {
    this.fileControl.setValue(null);
  }

  public clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  public startLoading(file: TuiFileLike): Observable<TuiFileLike | null> {
    this.loadingFiles$.next(file);
    this.fireStorageService.uploadUserPhoto(this.userId, file);
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

  public submitUserData(formValue: FormGroup):void{
    if(formValue.value.dateBth) {
    formValue.value.dateBth = formValue.value.dateBth.valueOf();
    }
    if(!this._urlPhoto) {
      this._urlPhoto = this.userData?.photoURL || null;
    }
    this.submitProfile.emit({...formValue.value, photoURL:this._urlPhoto});
  }

  public cencelEdit():void{
    this.submitProfile.emit(null);
  }
}
