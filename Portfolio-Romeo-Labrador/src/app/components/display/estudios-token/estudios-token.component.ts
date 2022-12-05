import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios-token',
  templateUrl: './estudios-token.component.html',
  styleUrls: ['./estudios-token.component.css']
})
export class EstudiosTokenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  descripcion:string = 'Descripcion del Estudio'

}
