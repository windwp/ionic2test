import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Modal2 } from './modal2'
@Component({
    selector: 'page-modal1',
    templateUrl: 'modal1.html'
})
export class Modal1 {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }
    public viewModal2(): void {
        var modal = this.modalCtrl.create(Modal2);
        modal.present();
    }
    close() {
        this.navCtrl.pop();
    }
}
