import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './location.model';

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient){}

  //Agregar Location
  agregarLocation(location: Location){
    this.httpClient.post('/api/add', location).subscribe(
      response => {
        console.log("Resultado guardar Empleado: " + response);
      },
      error => console.log("Algo ocurre" + error)
    );
  }

  //Cargar Locations
  cargarLocations(){
    return this.httpClient.get('/api/locations');
  }

  //Eliminar Location
  eliminarLocation(location: number){
    this.httpClient.delete('/api/delete/' + location).subscribe(
      response => {
        console.log("Resultado eliminar Location: " + response);
      },
      error => console.log("Algo ocurre" + error)
    );
  }

}
