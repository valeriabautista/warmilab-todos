import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  avatar: string;
  nombre: string;
  fechaNacimiento: string;
  descripcion: string;
  background: string;

  constructor(public navCtrl: NavController) {

  }

}
