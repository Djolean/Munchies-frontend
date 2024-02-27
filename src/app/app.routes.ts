import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { CreateGroupOrderComponent } from './create-group-order/create-group-order.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AuthGuard } from './auth.guard';
import { RestaurantsService } from './restaurants.service';

export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch:'full'
    },
    { 
        path: 'login', component: LoginComponent
    },
    { 
        path: 'restaurants', component: RestaurantsComponent 
    },
    { 
        path: 'add-restaurant', component: AddRestaurantComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'restaurant/:id', component: RestaurantDetailsComponent,
    },
    { 
        path: 'create-group-order/:id', component: CreateGroupOrderComponent
    },
];
