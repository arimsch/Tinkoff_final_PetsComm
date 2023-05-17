import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NewsModule } from './news/news.module';
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { ProfileModule } from './profile/profile.module';
import { AuthGuard } from 'src/app/core/auth.guard';
import { StorageService } from './core/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { FireStorageService } from './core/fire-storage.service';
import { UsersApiService } from './core/users-api.service';
import { IUsersApiServiceToken } from './core/interfaces/users-api-service';
import { UserService } from './core/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HomeModule,
    SharedModule,
    NewsModule,
    UsersModule,
    AuthModule,
    RegistrationModule,
    ProfileModule,
    TuiRootModule,
    TuiAlertModule,
    HttpClientModule,
  ],
  providers: [{ provide: IUsersApiServiceToken, useClass: UsersApiService }, 
    UserService,
    AuthGuard, 
    StorageService, 
    FireStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
