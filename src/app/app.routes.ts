import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

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
];
