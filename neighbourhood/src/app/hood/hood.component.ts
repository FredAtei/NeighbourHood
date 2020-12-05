import { Component, OnInit } from '@angular/core';
import { HoodService } from '../hood.service'

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {

   hood = [ ]
  constructor(private hoodService:HoodService) { }

  ngOnInit(): void {
    this.hoodService.getHouses().subscribe((data: any[]) => {
      console.log(data);
      this.hood=data;
    })
  }

}
