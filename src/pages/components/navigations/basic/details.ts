import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html',
})
export class NavigationsDetails {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}
