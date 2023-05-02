import { TuiAlertModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    HomeModule,
    SharedModule,
    NewsModule,
    UsersModule,

    // TuiRootModule,
    // TuiDialogModule,
    TuiAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
