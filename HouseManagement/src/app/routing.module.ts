import { TasksComponent } from './features/tasks/tasks.component';
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
  { path: 'tasks', component: TasksComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
