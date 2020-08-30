import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient){}

  //Agregar Empleado
  agregarEmpleado(empleado: Employee){
    this.httpClient.post('http://localhost:3050/add', empleado, httpOptions).subscribe(
      response => {
        console.log("Resultado guardar Empleado: " + response);
      },
      error => console.log("Error al guardar empleado: " + error)
    );
  }
}
