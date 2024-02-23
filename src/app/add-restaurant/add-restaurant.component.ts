import { Component, Injectable } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [AngularMaterialModule, FormsModule, HttpClientModule],
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css',
  providers: [RestaurantsService],
})
@Injectable({
  providedIn: 'root',
})
export class AddRestaurantComponent {
  restaurantName: string = '';
  address: string = '';
  phoneNumber: string = '';
  menuUrl: string = '';
  deliveryTime: string = '';
  additionalCharges: string = '';

  constructor(private restaurantsService: RestaurantsService) {}

  onSubmit() {
     this.restaurantsService
     .addRestaurant({
       restaurantName: this.restaurantName,
       address: this.address,
       phoneNumber: this.phoneNumber,
       menuUrl: this.menuUrl,
       deliveryTime: this.deliveryTime,
       additionalCharges: this.additionalCharges,
     })
     .subscribe(
       (response) => {
         console.log('Restaurant added successfully', response);
       },
       (error) => {
         console.error('Error adding restaurant', error);
       }
     );
 }
}