import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './location.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient){}

  //Agregar Location
  agregarLocation(location: Location){
    this.httpClient.post(environment.url + '/api/add', location).subscribe(
      response => {
        console.log("Resultado guardar Empleado: " + response);
      },
      error => console.log("Algo ocurre" + error)
    );
  }

  //Cargar Locations
  cargarLocations(){
    return this.httpClient.get(environment.url + '/api/locations');
  }

  //Eliminar Location
  eliminarLocation(location: number){
    this.httpClient.delete(environment.url + '/api/delete/' + location).subscribe(
      response => {
        console.log("Resultado eliminar Location: " + response);
      },
      error => console.log("Algo ocurre" + error)
    );
  }

}
