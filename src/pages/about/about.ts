import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nombre: string = "Valeria";
  ocupacion: string = "estudiante";
  edad: number = 13;

  datos: any = {
    nombre: "VALERIA",
    ocupacion: "Estudiante",
    edad: 13
  };

  datos2: any = {
    origen: "Huancayo",
    email: "vmarroyoporras",
    telefono: 946587822

  };
  constructor(public navCtrl: NavController) {

  }

}
