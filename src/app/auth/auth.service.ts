import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    });
  }

}
