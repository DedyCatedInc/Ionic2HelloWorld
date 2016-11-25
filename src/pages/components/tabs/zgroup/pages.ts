import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsBadges } from '../badges/pages';
import { TabsBasic } from '../basic/pages';
import { TabsIcon } from '../icon/pages';
import { TabsIconText } from '../icon-text/pages';

@Component({
  templateUrl: 'pages.html'
})
export class TabsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Badges', component: TabsBadges },
      { title: 'Basic', component: TabsBasic },
      { title: 'Icon', component: TabsIcon },
      { title: 'Icon Text', component: TabsIconText }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
