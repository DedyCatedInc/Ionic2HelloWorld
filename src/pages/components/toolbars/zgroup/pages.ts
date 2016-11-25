import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToolbarBasic } from '../basic/pages';
import { ToolbarButtons } from '../buttons/pages';
import { ToolbarColors } from '../colors/pages';
import { ToolbarSearchbar } from '../searchbar/pages';
import { ToolbarSegment } from '../segment/pages';

@Component({
  templateUrl: 'pages.html'
})
export class ToolbarsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: ToolbarBasic },
      { title: 'Buttons', component: ToolbarButtons },
      { title: 'Colors', component: ToolbarColors },
      { title: 'Searchbar', component: ToolbarSearchbar },
      { title: 'Segment', component: ToolbarSegment }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
