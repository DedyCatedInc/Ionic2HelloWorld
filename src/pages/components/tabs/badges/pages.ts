import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabsbadgedetails.html'
})
export class TabsBadgeDetails {

}

@Component({
  templateUrl: 'tabsbadges.html'
})
export class TabsBadges {
  tabOne = TabsBadgeDetails;
  tabTwo = TabsBadgeDetails;
  tabThree = TabsBadgeDetails;
}
