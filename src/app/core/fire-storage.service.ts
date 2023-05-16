import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable()
export class FireStorageService {
  constructor(private readonly fireStorage: AngularFireStorage) {}

  public upload<T>(path: string, data: T): Observable<number | undefined> {
    return this.fireStorage.upload(path, data).percentageChanges();
  }
}
