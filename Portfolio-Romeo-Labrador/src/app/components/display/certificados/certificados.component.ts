import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../display.component';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  constructor(
    private DisplayComponent:DisplayComponent
  ) { }

  ngOnInit(): void {
  }

  lista3:number[] = this.DisplayComponent.lista3

}
