import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiKey = 'AIzaSyDwzXUF69LapiqBDHECsxYee2WYGAcoBk0';
  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.apiKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError((errorRes) => {
        let errorMessage = 'An unknown error has occurred.';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
        }
        return throwError(errorMessage);
      })
    );
  }

}