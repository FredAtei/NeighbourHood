import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../models/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../models/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: any;
  user: User;
  

  constructor(public loginService: LoginService,
    private authService: AuthService,private router: Router) { }

  ngOnInit(): void {

  }

  signup(Username: string,Email: string, Password1: string, Password2: string) {
    console.log('Username,Email,Password1,Password2 ', Username,Email,Password1,Password2);

    this.authService.signup(Username, Email, Password1, Password2).subscribe(
      (success) => {
        this.router.navigate(['/home']);
      },
      (error) => (this.error = error)
    );
  }
}
