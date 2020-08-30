import { DataServices } from './data.services';
import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';
  fullname = '';
  function = '';
  empleadoCreado = false;
  agregarEmpleadoStatus;
  empleados: Employee[] = [];
  empleadoconst;

  constructor(private dataServices: DataServices){}

  ngOnInit(): void {
    this.dataServices.cargarEmpleados().subscribe(
      (empleados: Employee[]) => {
        this.empleados = empleados;
      }
    );
  }

  // tslint:disable-next-line: typedef
  onAgregarEmpleado(){
    this.empleadoCreado = true;
    this.agregarEmpleadoStatus = 'Empleado Agregado';
    const empl = new Employee (this.fullname, this.function);
    this.empleadoconst = empl;
    console.log(empl);
    this.empleados.push(empl);
    this.dataServices.agregarEmpleado(empl);
  }

}
