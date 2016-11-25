import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IconsBasic } from '../basic/pages';

@Component({
  templateUrl: 'pages.html'
})
export class IconsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: IconsBasic }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
