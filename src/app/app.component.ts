import { DataServices } from './data.services';
import { Location } from './location.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';
  name = '';
  area_m2 = '';
  locationCreada = false;
  agregarLocationStatus;
  locations: Location[] = [];

  constructor(private dataServices: DataServices){}

  ngOnInit(): void {
    this.onCargarLocations();
  }

  // tslint:disable-next-line: typedef
  onAgregarLocation(){
    this.locationCreada = true;
    this.agregarLocationStatus = 'Empleado Agregado';
    const locat = new Location (this.locations.length+1, this.name, this.area_m2);
    console.log(locat);
    this.dataServices.agregarLocation(locat);
    this.onCargarLocations();
  }

  //Eliminar Location
  onEliminarLocation(id: number){
    this.dataServices.eliminarLocation(id);
    this.onCargarLocations();
  }

  //Cargar Empleados
  onCargarLocations(){
    this.dataServices.cargarLocations().subscribe(
      (location: Location[]) => {
        this.locations = location;
      }
    );
  }

}
