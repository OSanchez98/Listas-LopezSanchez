import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  listaAlumnos = [
    { nombre: 'juan Torres', promedio: 8.5, fechaIngreso: '05-01-2021'},
    { nombre: 'María pErez', promedio: 6.3, fechaIngreso: '08-24-2019'},
    { nombre: 'Pedro Ortiz', promedio: 9.1, fechaIngreso: '02-16-2021'},
    { nombre: 'Laura Sanchez', promedio: 5.9, fechaIngreso: '12-07-2018'},
    { nombre: 'Diana Ramirez', promedio: 7, fechaIngreso: '04-28-2022'}
  ];
}
