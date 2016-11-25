import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'pages.html'
})
export class BarcodeScannersBasic {
  constructor(public alerCtrl: AlertController) {

  }

  doScan() {
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      let alert = this.alerCtrl.create({
        title: 'Barcode Success',
        message: barcodeData.text,
        buttons: ['Ok']
      });
      alert.present();
    }, (err) => {
      // An error occurred
      let alert = this.alerCtrl.create({
        title: 'Barcode Error',
        message: err.text,
        buttons: ['Ok']
      });
      alert.present();
    });
  }
}
