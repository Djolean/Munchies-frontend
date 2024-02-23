import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  imports: [AngularMaterialModule, FormsModule, HttpClientModule, CommonModule, RestaurantDetailsComponent, RouterModule],
  selector: 'app-restaurants',
  standalone: true,
  templateUrl: './restaurants.component.html', 
  styleUrl: './restaurants.component.css',
  providers: [RestaurantsService],
})

export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantsService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }
}