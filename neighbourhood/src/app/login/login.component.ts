import { Component, OnInit } from '@angular/core';
import { AuthService } from '../models/auth.service';
import { LogoutService } from '../models/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(public logoutService: LogoutService,
    private authService: AuthService,
    private router: Router) { }

    ngOnInit(): void {
      this.logoutService.changeLogoutState(true);
    }
  
    login(Username: string, password: string) {
      console.log('username, password ', Username, password);
  
      this.authService.login(Username, password).subscribe(
        (success) => {
          this.logoutService.changeLogoutState(false);
          this.router.navigate(['/home']);
        },
        (error) => (this.error = error)
      );
    }
  }
