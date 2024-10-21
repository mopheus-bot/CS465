import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from '../services/trip-data.service';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) { }

  public getToken(): string {
    console.log("Inside authentication.service::getToken()")
    return this.storage.getItem('travlr-token') || "d";
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public login(user: User): Observable<any> {
    return this.tripDataService.login(user).pipe(
      tap((authResp: AuthResponse) => this.saveToken(authResp.token))
    );
  }

  public register(user: User): Observable<any> {
    return this.tripDataService.register(user).pipe(
      tap((authResp: AuthResponse) => this.saveToken(authResp.token))
    );
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token != 'd') {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    } else {
      return {} as User;
    }
  }
}
