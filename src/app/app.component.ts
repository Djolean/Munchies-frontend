import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { CreateGroupOrderComponent } from './create-group-order/create-group-order.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AuthInterceptor } from './auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, MatFormFieldModule, ReactiveFormsModule, FormsModule, LoginComponent, RestaurantsComponent, RestaurantDetailsComponent, CreateGroupOrderComponent, RouterModule, AddRestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AppComponent {
  title = 'munchies-frontend';
}
