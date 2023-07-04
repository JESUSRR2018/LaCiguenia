import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../../entity/Login';

@Injectable({
  providedIn: 'root'
})

export class ValidacionLoginService {

  private API : string = "http://localhost:8080"; 

  constructor(private clienteHttp: HttpClient){}

  validarDatosLogin(datosLogin: Login) : Observable <any> {
    return this.clienteHttp.post(this.API + "EndPoint", datosLogin);
  }
}