import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/routing.module';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { PaymentComponent } from './features/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginPageComponent,
    MainPageComponent,
    TasksComponent,
    ShoppingListComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
