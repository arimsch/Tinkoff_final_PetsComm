import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from 'src/shared/services/auth.service';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { RegistrationService } from 'src/shared/services/registration.service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UserService } from 'src/shared/services/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HomeModule,
    SharedModule,
    NewsModule,
    UsersModule,
    LoginModule,
    RegistrationModule,
    PageNotFoundModule,
    TuiRootModule,
    // TuiDialogModule,
    TuiAlertModule,
  ],
  providers: [RegistrationService, AuthService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
