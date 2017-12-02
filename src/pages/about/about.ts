import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
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
  },
  {
    titulo:"hobby",
    dato:"estudiar",
    icono:"alarm"
  }
];



  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
  this.agregardato("papa", "Ale", "heart");
  this.agregardato("mama" , "cinthya", "heart")
}
agregardato(nuevoTitulo:string, nuevoDato: string, nuevoIcono: string) {
  this.informacion.push({
    titulo: nuevoTitulo,
    dato: nuevoDato,
    icono: nuevoIcono
  });

}

}
