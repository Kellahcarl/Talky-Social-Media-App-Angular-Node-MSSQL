import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ForgotUser,
  LoginUser,
  UpdateUser,
  User,
  userImage,
} from '../../types/userInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:4100/user';

  constructor(private http: HttpClient) {}

  registerUser(userDetails: User): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, userDetails, {
      headers,
    });
  }

  getAllUsers(token: string): Observable<any> {
    const headers = new HttpHeaders({ token });
    return this.http.get<any>(this.apiUrl, { headers });
  }

  getUserById(userId: string, token: string): Observable<any> {
    const headers = new HttpHeaders({ token });
    return this.http.get<any>(`${this.apiUrl}/${userId}`, { headers });
  }

  loginUser(credentials: LoginUser): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, credentials, {
      headers,
    });
  }

  updateUser(userDetails: UpdateUser, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.put<any>(this.apiUrl, userDetails, { headers });
  }

  updateUserImage(userDetails: userImage, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.post<any>(`${this.apiUrl}/profile`, userDetails, {
      headers,
    });
  }

  deleteUserById(userId: string, token: string): Observable<any> {
    const headers = new HttpHeaders({ token });
    return this.http.delete<any>(`${this.apiUrl}/${userId}`, { headers });
  }

  checkUserDetails(token: string): Observable<any> {
    const headers = new HttpHeaders({ token });
    return this.http.get<any>(`${this.apiUrl}/check_user_details`, { headers });
  }

  resetPassword(userdetails: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/reset`, userdetails, {
      headers,
    });
  }

  forgotPassword(resetDetails: ForgotUser): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/forgot`, resetDetails, {
      headers,
    });
  }
}
