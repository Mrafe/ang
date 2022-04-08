import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-age',
  templateUrl: './display-age.component.html',
  styleUrls: ['./display-age.component.css']
})
export class DisplayAgeComponent implements OnInit {

  age: number = 21;

  constructor() { }

  ngOnInit(): void {
  }

}
