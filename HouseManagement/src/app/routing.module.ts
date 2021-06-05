import { TasksComponent } from './features/tasks/tasks.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './features/payment/payment.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: 'payment', data: { header: true }, component: PaymentComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'home', data: { header: true }, component: HomeComponent },
  { path: 'login', data: { header: false }, component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
