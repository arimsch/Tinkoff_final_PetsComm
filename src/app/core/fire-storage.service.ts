import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
} from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

const pathNews = 'newsImg';

@Injectable()
export class FireStorageService {
  public readonly load$ = new BehaviorSubject<boolean>(false);
  private _url: string | null;

  constructor(
    private readonly fireStorage: AngularFireStorage
  ) {
    this._url = null;
  }

  public get url(): string | null {
    return this._url;
  }

  public uploadNewsPhoto<T>(id:string, data:T):void {
    this.load$.next(true);
    this._url = null;
    this.fireStorage.upload(`${pathNews}/${id}`, data).then(() => {
      this.fireStorage
        .ref(`${pathNews}/${id}`)
        .getDownloadURL()
        .subscribe(url => {
          this._url = url;
          this.load$.next(false);
        });
    });
  }
}
