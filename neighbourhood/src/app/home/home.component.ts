import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showForm=false;
  showUsers=false;

 

  showDetails() {
    this.showForm = !this.showForm
    
  }  
  showUsersList(){
    this.showUsers= !this.showUsers
  }
  constructor( ) { }

  ngOnInit(){
      this.showForm = false;
      this.showUsers =false;
     
  }

}
