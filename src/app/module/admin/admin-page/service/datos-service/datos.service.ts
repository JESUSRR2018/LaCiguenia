import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos } from 'src/app/shared/interface/InterfaceDatos';
import EndPointsApi from 'src/app/shared/constants/EndPointsApi';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  apiConexion = EndPointsApi.BASE_URL_DATOS;

  constructor(private getMapping: HttpClient) { }

  datosVentasDelDia (){
    return this.getMapping.get<Datos>(this.apiConexion);
  }
}