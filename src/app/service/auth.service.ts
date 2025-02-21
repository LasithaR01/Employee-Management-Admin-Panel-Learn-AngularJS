import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private http = inject(HttpClient);

  constructor() {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http
      .post('https://dummyjson.com/auth/login', user)
      .pipe(
        tap((response: any) => this.doLoginUser(user.username, response.token))
      );
  }

  private doLoginUser(username: string, token: any) {
    this.loggedUser = username;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    alert(jwt);
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentAuthUser() {
  let token = localStorage.getItem(this.JWT_TOKEN);
  return this.http.get('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
}
