import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HoodService } from '../hood.service';

@Component({
  selector: 'app-hood-list',
  templateUrl: './hood-list.component.html',
  styleUrls: ['./hood-list.component.css']
})
export class HoodListComponent implements OnInit {

  houses:any;
  currentHouse = null;
  currentIndex = -1;

  constructor(private hoodService: HoodService) { }

  ngOnInit(): void {
    this.receiveHouses();
  }

receiveHouses(): void {
    this.hoodService.getHouses().subscribe(data=>{
      this.houses = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  refreshList(): void {
    this.receiveHouses();
    this.currentHouse = null;
    this.currentIndex = -1
  }

  setActiveHouse(house, index): void{
    this.currentHouse = house;
    this.currentIndex = index;
  }
}
