import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'tabsicontextdetails.html'
})
export class TabsIconTextDetails {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'tabsicontext.html'
})
export class TabsIconText {
  tabOne = TabsIconTextDetails;
  tabTwo = TabsIconTextDetails;
  tabThree = TabsIconTextDetails;
  tabFour = TabsIconTextDetails;
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
