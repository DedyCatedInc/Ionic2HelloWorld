import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardsAdvancedMap } from '../advanced-map/pages';
import { CardsAdvancedSocial } from '../advanced-social/pages';
import { CardsAdvancedWeather } from '../advanced-weather/pages';
import { CardsBackground } from '../background/pages';
import { CardsBasic } from '../basic/pages';
import { CardsHeader } from '../header/pages';
import { CardsImage } from '../image/pages';
import { CardsList } from '../list/pages';

@Component({
  templateUrl: 'pages.html'
})
export class CardsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Advanced Map', component: CardsAdvancedMap },
      { title: 'Advanced Social', component: CardsAdvancedSocial },
      { title: 'Advanced Weather', component: CardsAdvancedWeather },
      { title: 'Background', component: CardsBackground },
      { title: 'Basic', component: CardsBasic },
      { title: 'Header', component: CardsHeader },
      { title: 'Image', component: CardsImage },
      { title: 'List', component: CardsList }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
