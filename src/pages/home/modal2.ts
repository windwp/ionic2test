import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-modal2',
    templateUrl: 'modal2.html'
})
export class Modal2 {

    constructor(public navCtrl: NavController) {

    }

    close() {
        this.navCtrl.pop();
    }

}
