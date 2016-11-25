import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RangesBasic } from '../basic/pages';

@Component({
  templateUrl: 'pages.html'
})
export class RangesZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: RangesBasic }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
