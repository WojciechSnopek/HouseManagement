import { MainPageComponent } from './shared/main-page/main-page.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './features/payment/payment.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ErrorPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
