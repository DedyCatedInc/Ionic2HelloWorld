import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'pages4.html'
})
export class ToolbarColorPage4 {
  constructor(public nav: NavController) {

  }

  goBack() {
    this.nav.setRoot(ToolbarColors);
  }
}

@Component({
  templateUrl: 'pages3.html'
})
export class ToolbarColorPage3 {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(ToolbarColorPage4);
  }
}

@Component({
  templateUrl: 'pages2.html'
})
export class ToolbarColorPage2 {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(ToolbarColorPage3);
  }

}

@Component({
  templateUrl: 'pages1.html'
})
export class ToolbarColors {
  constructor(public nav: NavController) {

  }

  pushPage() {
    this.nav.push(ToolbarColorPage2);
  }
}
