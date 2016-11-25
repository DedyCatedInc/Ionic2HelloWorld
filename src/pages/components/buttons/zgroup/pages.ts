import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ButtonsBasic } from '../basic/pages';
import { ButtonsBlock } from '../block/pages';
import { ButtonsClear } from '../clear/pages';
import { ButtonsComponents } from '../components/pages';
import { ButtonsFull } from '../full/pages';
import { ButtonsIcons } from '../icons/pages';
import { ButtonsOutline } from '../outline/pages';
import { ButtonsRound } from '../round/pages';
import { ButtonsSizes } from '../sizes/pages';

@Component({
  templateUrl: 'pages.html'
})
export class ButtonsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: ButtonsBasic },
      { title: 'Block', component: ButtonsBlock },
      { title: 'Clear', component: ButtonsClear },
      { title: 'Components', component: ButtonsComponents },
      { title: 'Full', component: ButtonsFull },
      { title: 'Icons', component: ButtonsIcons },
      { title: 'Outline', component: ButtonsOutline },
      { title: 'Round', component: ButtonsRound },
      { title: 'Sizes', component: ButtonsSizes },
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
