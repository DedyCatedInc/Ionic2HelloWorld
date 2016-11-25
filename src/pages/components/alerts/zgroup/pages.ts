import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertsBasic } from '../basic/pages';
import { AlertsCheckbox } from '../checkbox/pages';
import { AlertsConfirm } from '../confirm/pages';
import { AlertsPrompt } from '../prompt/pages';
import { AlertsRadio } from '../radio/pages';

@Component({
  templateUrl: 'pages.html'
})
export class AlertsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: AlertsBasic },
      { title: 'Checkbox', component: AlertsCheckbox },
      { title: 'Confirm', component: AlertsConfirm },
      { title: 'Prompt', component: AlertsPrompt },
      { title: 'Radio', component: AlertsRadio }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
