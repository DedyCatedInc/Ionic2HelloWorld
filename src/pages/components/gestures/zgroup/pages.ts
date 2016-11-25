import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GesturesBasic } from '../basic/pages';

@Component({
  templateUrl: 'pages.html'
})
export class GesturesZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: GesturesBasic }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
