import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registros de Usuarios';
  mensaje = '';
  registrado = false;

  nombre:string="";
  apellido:string="";
  cargo:string = "";
  entradas: any[] ;

  constructor() {
    this.entradas = [
        {value:"Paiton cada dia mas presentes",name:"Paiton cada dia mas presente"},
        {value:"Java presente de hace anios",name:"dfdsf"},
        {value:"Java Script cada vez mas funcional",name:"dfdsf "},
        {value:"Kotlin potencia para tus apps",name:"hdfg"},
        {value:"Donde quedo Pascal",name:" fdfds"},
    ]
  }
  registrarUsuarios(): void {
    this.mensaje="usuarios registrado con exito";
    this.registrado=true;

  }
}
