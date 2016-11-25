import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListsAvatar } from '../avatar/pages';
import { ListsBasic } from '../basic/pages';
import { ListsDividers } from '../dividers/pages';
import { ListsHeaders } from '../headers/pages';
import { ListsIcon } from '../icon/pages';
import { ListsInset } from '../inset/pages';
import { ListsItem } from '../item/pages';
import { ListsMultiline } from '../multiline/pages';
import { ListsNoLines } from '../no-lines/pages';
import { ListsSliding } from '../sliding/pages';
import { ListsThumbnail } from '../thumbnail/pages';

@Component({
  templateUrl: 'pages.html'
})
export class ListsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Avatar', component: ListsAvatar },
      { title: 'Basic', component: ListsBasic },
      { title: 'Dividers', component: ListsDividers },
      { title: 'Headers', component: ListsHeaders },
      { title: 'Icon', component: ListsIcon },
      { title: 'Inset', component: ListsInset },
      { title: 'Item', component: ListsItem },
      { title: 'Multiline', component: ListsMultiline },
      { title: 'No Lines', component: ListsNoLines },
      { title: 'Sliding', component: ListsSliding },
      { title: 'Thumbnail', component: ListsThumbnail }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
