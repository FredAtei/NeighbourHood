import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business:any;
  currentCat = null;
  currentIndex = -1
  
  constructor(private businessService:BusinessService) { }

  ngOnInit(): void {
    this.receiveCats();
  }
  receiveCats():void {
    this.businessService.getCats().subscribe(data=>{
      this.business = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  refreshList():void {
    this.receiveCats();
    this.currentCat = null;
    this.currentIndex = -1
  }

  setActiveCat(category, index): void{
    this.currentCat = category;
    this.currentIndex = index;
  }

}
