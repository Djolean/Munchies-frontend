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

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rest/allRestaurants`)
  }

  addRestaurant(restaurantData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/rest/add`, restaurantData);
  }

  getRestaurantById(restaurantId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/restaurants/${restaurantId}`);
  }

  createGroupOrder(restaurantId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-group-order/${restaurantId}`, {});
  }
}