import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) {
  }


  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public login(user: User): void {
    if (user.email !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
      // console.log(user.email + " " + user.password);   // testy
    }
  }

  public logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
