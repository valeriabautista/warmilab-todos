import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  avatar: string = 'assets/img/alex-profile-pic.png';
  nombre: string = 'Alex Wong';
  fechaNacimiento: string = 'May 18, 1989';
  descripcion: string = "Hi, it's me Alex";
  background: string = 'assets/img/alex-profile-background.png';

  constructor(public navCtrl: NavController) {

  }

}
