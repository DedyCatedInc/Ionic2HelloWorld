import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'tabsbasicdetails.html'
})
export class TabsBasicDetails {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  templateUrl: 'tabsbasic.html'
})
export class TabsBasic {
  tabOne = TabsBasicDetails;
  tabTwo = TabsBasicDetails;
  tabThree = TabsBasicDetails;
}
