import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  nombre: string = "Valeria bautista";
  ocupacion: string = "estudiante";
  edad: number = 14;


  datos: any = {
    nombre: "Valeria Bautista2",
    ocupacion: "Estudiante2",
    edad: 14
  };
  informacion: any = {
    origenlbl: "origen3",
    ciudad:"lima,peru3"
    };


  redsocial: string = "e-mail";
  correos: string = "valeriabarzola96234380@hotmail.com";

  constructor(public navCtrl: NavController) {

  }

}
