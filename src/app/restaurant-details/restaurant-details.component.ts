import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [AngularMaterialModule, HttpClientModule, CommonModule],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css',
  providers: [RestaurantsService]
})
export class RestaurantDetailsComponent implements OnInit {
  restaurants: any[] = [];
  constructor( private route: ActivatedRoute, private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
  this.getDetails(); 
  }

  getDetails() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.restaurantsService.getRestaurantById(id).subscribe(
    (response) => {
      this.restaurants = response;
    },
    (error) => {
      console.error('Error fetching restaurant details:', error);
    }
  );
}
}