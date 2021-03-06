import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({
  templateUrl: 'pages.html'
})
export class ToolbarSegment {
  isAndroid: boolean = false;
  selectedSegment: string = "hot";

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewWillEnter() {
    document.getElementById('md-tabs-icon').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }

  ionViewWillLeave() {
    document.getElementById('md-tabs-icon').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }

}
