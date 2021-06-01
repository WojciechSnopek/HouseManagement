import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/routing.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { PaymentComponent } from './features/payment/payment.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
