import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nombre: string = "Valeria";
  ocupacion: string = "estudiante";
  edad: number = 14;

  datos: any = {
    nombre: "Valeria B",
    ocupacion: "Estudiante",
    edad: 14
  };

informacion: any[] = [
  {
    titulo:"origen",
    dato: "Lima",
    icono:"flag"
  },
  {
    titulo: "email",
    dato:"vale0107hotmail.com",
    icono: "mail"
  },
  {
    titulo:"telefono",
    dato: 962343380,
    icono:"call"
  }
];



  constructor(public navCtrl: NavController) {

  }

}
