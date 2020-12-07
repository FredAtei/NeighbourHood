import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  getUsers(): void {
    // this.users = this.homeService.getUsers();
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('this.users', this.users);
    });
  }

  constructor(
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.getUsers();
  }

}
