import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { Modal1 } from './modal1'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public viewModal1(): void {
    var modal = this.modalCtrl.create(Modal1);
    modal.present();
  }
}
