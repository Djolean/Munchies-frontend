import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { AngularMaterialModule } from '../../angular-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestaurantsComponent } from '../../restaurants/restaurants.component';

@Component({
  imports: [AngularMaterialModule, FormsModule, HttpClientModule],
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showBadCredentials: boolean = false;
  constructor(private loginService: LoginService, private router:Router) {}

  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/restaurants']);
        this.showBadCredentials = false;
        localStorage.setItem('username', this.username);
      },
      (error) => {
        this.showBadCredentials = true;
        console.error('Login failed', error);
      }
    );
  }
}
