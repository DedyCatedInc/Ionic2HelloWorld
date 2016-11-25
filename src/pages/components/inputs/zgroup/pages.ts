import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InputsBasic } from '../basic/pages';
import { InputsFixedInline } from '../fixed-inline/pages';
import { InputsFloating } from '../floating/pages';
import { InputsInline } from '../inline/pages';
import { InputsInset } from '../inset/pages';
import { InputsPlaceholder } from '../placeholder/pages';
import { InputsStacked } from '../stacked/pages';

@Component({
  templateUrl: 'pages.html'
})
export class InputsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Basic', component: InputsBasic },
      { title: 'Fixed Inline', component: InputsFixedInline },
      { title: 'Floating', component: InputsFloating },
      { title: 'Inline', component: InputsInline },
      { title: 'Inset', component: InputsInset },
      { title: 'Placeholder', component: InputsPlaceholder },
      { title: 'Stacked', component: InputsStacked }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
