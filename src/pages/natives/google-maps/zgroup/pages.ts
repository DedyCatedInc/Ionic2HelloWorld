import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GoogleMapsJavaScriptBackground } from '../javascript-background/pages';
import { GoogleMapsJavaScript } from '../javascript/pages';
import { GoogleMapsNative } from '../native/pages';

@Component({
  templateUrl: 'pages.html'
})
export class GoogleMapsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'JavaScript', component: GoogleMapsJavaScript },
      { title: 'JavaScript Background', component: GoogleMapsJavaScriptBackground },
      { title: 'Native', component: GoogleMapsNative }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
