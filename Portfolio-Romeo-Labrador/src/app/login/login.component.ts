import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DesplazamientoService } from '../components/desplazamiento.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() mensaje = new EventEmitter<{nombre:string, password:string}>();

  user: string = ' ';


  pass: string = ' ';

  constructor(private router:Router, private servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

  Regresar(){
    this.router.navigate(['./home'])
  }

  log(){
    this.servicio.LoginSuccess.emit();
    this.router.navigate(['./home'])
  }

}
