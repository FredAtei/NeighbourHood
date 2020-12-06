import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HoodService } from '../hood.service';

@Component({
  selector: 'app-hood-form',
  templateUrl: './hood-form.component.html',
  styleUrls: ['./hood-form.component.css']
})
export class HoodFormComponent implements OnInit {

  form: FormGroup;
  response;
  image;
  constructor(private formBuilder: FormBuilder, private hoodservice: HoodService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      houses:[]
    });
  }
onFileSelectec(event){
  if(event.target.files.length > 0) {
    const file = event.target.files[0]
}
}
}
