import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenusBasic } from '../basic/pages';

@Component({
  templateUrl: 'pages.html'
})
export class MenusZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: MenusBasic }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
