import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScannersZgroup } from '../barcode-scanners/barcode-scanners';
import { CamerasZgroup } from '../cameras/cameras';
import { GoogleMapsZgroup } from '../google-maps/google-maps';

@Component({
  templateUrl: 'pages.html'
})
export class NativesZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Barcode Scanners', component: BarcodeScannersZgroup },
      { title: 'Cameras', component: CamerasZgroup },
      { title: 'Google Maps', component: GoogleMapsZgroup }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
