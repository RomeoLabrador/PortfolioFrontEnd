import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesplazamientoService {

  @Output() Ejecutar0: EventEmitter<any> = new EventEmitter();

  @Output() Ejecutar1: EventEmitter<any> = new EventEmitter();

  @Output() Ejecutar2: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
