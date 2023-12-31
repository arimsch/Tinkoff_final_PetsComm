import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './news/news.module';
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthGuard } from 'src/app/core/auth.guard';
import { StorageService } from './core/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { FireStorageService } from './core/fire-storage.service';
import { UsersApiService } from './core/users-api.service';
import { IUsersApiServiceToken } from './core/interfaces/i-users-api-service';
import { UserService } from './core/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    TuiRootModule,
    TuiAlertModule,
    HttpClientModule,
    NewsModule,
    UsersModule,
    AuthModule,
    RegistrationModule,
  ],
  providers: [
    { provide: IUsersApiServiceToken, useClass: UsersApiService },
    UserService,
    AuthGuard,
    StorageService,
    FireStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
