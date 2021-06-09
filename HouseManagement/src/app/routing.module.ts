import { TasksComponent } from './features/tasks/tasks.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './features/payment/payment.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },

  // {
  //   path: '', component: HomeComponent, canActivate: [AuthGuard],
  //   children: [{
  //     path: 'login',
  //     component: LoginPageComponent
  //   }]
  // },
  {
    path: 'payment',
    canActivate: [AuthGuard],
    component: PaymentComponent
  },
  {
    path: 'shopping-list',
    // canActivate: [AuthGuard],
    component: ShoppingListComponent
  },
  {
    path: 'tasks',
    canActivate: [AuthGuard],
    component: TasksComponent
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // { path: '', component: LoginPageComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },



  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
