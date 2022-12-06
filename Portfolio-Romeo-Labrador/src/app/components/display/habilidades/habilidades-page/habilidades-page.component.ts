import { Component, OnInit,Input,Output } from '@angular/core';
import { DisplayComponent } from '../../display.component';

@Component({
  selector: 'app-habilidades-page',
  templateUrl: './habilidades-page.component.html',
  styleUrls: ['./habilidades-page.component.css']
})
export class HabilidadesPageComponent implements OnInit {

  constructor(
    private Displaycomponent:DisplayComponent
  ) { }

 

  ngOnInit(): void {
  }

  lista2:number [] = this.Displaycomponent.lista2;
}
