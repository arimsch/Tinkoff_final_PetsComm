import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { FireStorageService } from '../core/fire-storage.service';
import { AngularFireList } from '@angular/fire/compat/database';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-us',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent {
  // selectedFile: File | null = null;
  // fb = '';
  // downloadURL!: Observable<string | null>;
  // usersRef!: AngularFireList<any>;
  users$: User[] = [];
  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => (this.users$ = data));
  }

  // onFileSelected(event: Event) {
  // var n = Date.now();
  // const file = (event.target as HTMLInputElement).files;
  // const filePath = `RoomsImages/11`;
  // const fileRef = this.storage.ref(filePath);
  // if (file && file[0]) {
  //   const task = this.storage.upload(filePath, file[0]);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log(this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log(url);
  //       }
  //     });
  // }
  // }
}
