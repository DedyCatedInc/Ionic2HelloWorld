import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetsZgroup } from '../action-sheets/action-sheets';
import { AlertsZgroup } from '../alerts/alerts';
import { BadgesZgroup } from '../badges/badges';
import { ButtonsZgroup } from '../buttons/buttons';
import { CardsZgroup } from '../cards/cards';
import { CheckboxesZgroup } from '../checkboxes/checkboxes';
import { DatetimeZgroup } from '../datetime/datetime';
import { FabsZgroup } from '../fabs/fabs';
import { GesturesZgroup } from '../gestures/gestures';
import { GridsZgroup } from '../grids/grids';
import { IconsZgroup } from '../icons/icons';
import { InputsZgroup } from '../inputs/inputs';
import { ListsZgroup } from '../lists/lists';
import { LoadingZgroup } from '../loading/loading';
import { MenusZgroup } from '../menus/menus';
import { ModalsZgroup } from '../modals/modals';
import { NavigationsZgroup } from '../navigations/navigations';
import { PopoversZgroup } from '../popovers/popovers';
import { RadiosZgroup } from '../radios/radios';
import { RangesZgroup } from '../ranges/ranges';
import { SearchbarsZgroup } from '../searchbars/searchbars';
import { SegmentsZgroup } from '../segments/segments';
import { SelectsZgroup } from '../selects/selects';
import { SlidesZgroup } from '../slides/slides';
import { TabsZgroup } from '../tabs/tabs';
import { ToastsZgroup } from '../toasts/toasts';
import { TogglesZgroup } from '../toggles/toggles';
import { ToolbarsZgroup } from '../toolbars/toolbars';

@Component({
  templateUrl: 'pages.html'
})
export class ComponentsZgroup {
  items: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push(
      { title: 'Action Sheets', component: ActionSheetsZgroup },
      { title: 'Alerts', component: AlertsZgroup },
      { title: 'Badges', component: BadgesZgroup },
      { title: 'Buttons', component: ButtonsZgroup },
      { title: 'Cards', component: CardsZgroup },
      { title: 'Checkboxes', component: CheckboxesZgroup },
      { title: 'Datetime', component: DatetimeZgroup },
      { title: 'FABs', component: FabsZgroup },
      { title: 'Gestures', component: GesturesZgroup },
      { title: 'Grids', component: GridsZgroup },
      { title: 'Icons', component: IconsZgroup },
      { title: 'Inputs', component: InputsZgroup },
      { title: 'Lists', component: ListsZgroup },
      { title: 'Loading', component: LoadingZgroup },
      { title: 'Menus', component: MenusZgroup },
      { title: 'Modals', component: ModalsZgroup },
      { title: 'Navigations', component: NavigationsZgroup },
      { title: 'Popovers', component: PopoversZgroup },
      { title: 'Radios', component: RadiosZgroup },
      { title: 'Ranges', component: RangesZgroup },
      { title: 'Searchbars', component: SearchbarsZgroup },
      { title: 'Segments', component: SegmentsZgroup },
      { title: 'Selects', component: SelectsZgroup },
      { title: 'Slides', component: SlidesZgroup },
      { title: 'Tabs', component: TabsZgroup },
      { title: 'Toasts', component: ToastsZgroup },
      { title: 'Toggles', component: TogglesZgroup },
      { title: 'Toolbars', component: ToolbarsZgroup }
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
