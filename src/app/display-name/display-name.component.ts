import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent implements OnInit {

  firstName: string = 'Mai';
  lastName: string = 'Sak';

  constructor() { }

  ngOnInit(): void {
  }

}
