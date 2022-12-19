import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';

@Component({
  selector: 'app-habilidades-token',
  templateUrl: './habilidades-token.component.html',
  styleUrls: ['./habilidades-token.component.css']
})
export class HabilidadesTokenComponent implements OnInit {

  eliminar(){

  }

  guardar(){
    
  }

  constructor(protected servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

}
