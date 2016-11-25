import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'tabsicondetails.html'
})
export class TabsIconDetails {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewWillEnter() {
    // document.getElementById('md-tabs-icon').style.display = "block";
    // document.getElementById('md-only').style.display = "none";
  }
}

@Component({
  templateUrl: 'tabsicon.html'
})
export class TabsIcon {
  tabOne = TabsIconDetails;
  tabTwo = TabsIconDetails;
  tabThree = TabsIconDetails;
  tabFour = TabsIconDetails;
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewWillLeave() {
    document.getElementById('md-tabs-icon').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }
}
