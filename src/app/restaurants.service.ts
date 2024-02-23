import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {
  private apiUrl = 'http://localhost:8080'; 
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any[]> {

    if (!this.token) {
      console.error('User not authed!');
      return throwError(() => new Error('User not authenticated'));
    }

    const headers = {
      Authorization: `Basic ${this.token}`
    };

    return this.http.get<any[]>(`${this.apiUrl}/rest/allRestaurants`, { headers })
      
  }
  getRestaurantById(restaurantId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/restaurants/${restaurantId}`);
  }

  createGroupOrder(restaurantId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-group-order/${restaurantId}`, {});
  }
}