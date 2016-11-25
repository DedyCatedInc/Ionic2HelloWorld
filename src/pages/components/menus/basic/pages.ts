import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'pages-home.html'
})
export class MenusBasic {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }
}

@Component({
  templateUrl: 'pages-home.html'
})
export class MenusPageOne {

}

@Component({
  templateUrl: 'pages-friends.html'
})
export class MenusPageTwo {

}

@Component({
  templateUrl: 'pages-events.html'
})
export class MenusPageThree {

}
