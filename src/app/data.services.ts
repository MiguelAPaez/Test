import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient){}

  //Agregar Empleado
  agregarEmpleado(empleado: Employee){
    this.httpClient.post('/api/add', empleado).subscribe(
      response => {
        console.log("Resultado guardar Empleado: " + response);
      },
      error => console.log("Algo ocurre" + error)
    );
  }

  //Cargar Empleados
  cargarEmpleados(){
    return this.httpClient.get('/api/employees');
  }

  //Eliminar Empleado
  eliminarEmpleado(empleado: number){
    this.httpClient.delete('/api/delete/' + empleado).subscribe(
      response => {
        console.log("Resultado eliminar Empleado: " + response);
      },
      error => console.log("Algo ocurre" + error)
    );
  }

}
