import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConditionDirective } from './condition.directive';
import { UserDirective } from './user.directive';
import { PasswordDirective } from './password.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConditionDirective,
    UserDirective,
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
