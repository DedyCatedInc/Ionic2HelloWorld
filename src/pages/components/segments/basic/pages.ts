import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({
  templateUrl: 'pages.html'
})
export class SegmentsBasic {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
