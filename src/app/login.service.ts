import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = {
      Authorization: 'Basic ' + btoa(username + ':' + password),
      'Content-Type': 'application/json'
    };

    return this.http.get(`${this.apiUrl}/rest/main/login`, { headers });
  }
}
