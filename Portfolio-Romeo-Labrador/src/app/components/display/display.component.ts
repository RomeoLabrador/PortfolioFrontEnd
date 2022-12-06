import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  
  lista1:number [] = [1,2,3];
  lista2:number[] = [1,2,3,4,5,6,7];
  lista3:number [] = [1,2,3,4,5,6]

  a:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
