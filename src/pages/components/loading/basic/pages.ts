import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'pages.html'
})
export class LoadingBasic {
  constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
  }
}
