import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
//------- Components (group of 5) -------
import { ComponentsZgroup } from '../pages/components/components';
import { ActionSheetsBasic, ActionSheetsZgroup } from '../pages/components/action-sheets/action-sheets';
import { AlertsBasic, AlertsCheckbox, AlertsConfirm, AlertsPrompt, AlertsRadio } from '../pages/components/alerts/alerts';
import { AlertsZgroup } from '../pages/components/alerts/alerts';
import { BadgesBasic, BadgesZgroup } from '../pages/components/badges/badges';
import { ButtonsBasic, ButtonsBlock, ButtonsClear, ButtonsComponents, ButtonsFull } from '../pages/components/buttons/buttons';
import { ButtonsIcons, ButtonsOutline, ButtonsRound, ButtonsSizes, ButtonsZgroup } from '../pages/components/buttons/buttons';
import { CardsAdvancedMap, CardsAdvancedSocial, CardsAdvancedWeather, CardsBackground, CardsBasic } from '../pages/components/cards/cards';
import { CardsHeader, CardsImage, CardsList, CardsZgroup } from '../pages/components/cards/cards';
import { CheckboxesBasic, CheckboxesZgroup } from '../pages/components/checkboxes/checkboxes';
import { DatetimeBasic, DatetimeZgroup } from '../pages/components/datetime/datetime';
import { FabsBasic, FabsZgroup } from '../pages/components/fabs/fabs';
import { GesturesBasic, GesturesZgroup } from '../pages/components/gestures/gestures';
import { GridsBasic, GridsZgroup } from '../pages/components/grids/grids';
import { IconsBasic, IconsZgroup } from '../pages/components/icons/icons';
import { InputsBasic, InputsFixedInline, InputsFloating, InputsInline, InputsInset } from '../pages/components/inputs/inputs';
import { InputsPlaceholder, InputsStacked, InputsZgroup } from '../pages/components/inputs/inputs';
import { ListsAvatar, ListsBasic, ListsDividers, ListsHeaders, ListsIcon } from '../pages/components/lists/lists';
import { ListsInset, ListsItem, ListsItemDetails, ListsMultiline, ListsNoLines } from '../pages/components/lists/lists';
import { ListsSliding, ListsThumbnail, ListsZgroup } from '../pages/components/lists/lists';
import { LoadingBasic, LoadingZgroup } from '../pages/components/loading/loading';
import { MenusBasic, MenusPageOne, MenusPageTwo, MenusPageThree, MenusZgroup } from '../pages/components/menus/menus';
import { ModalsBasic, ModalsBasicContent, ModalsZgroup } from '../pages/components/modals/modals';
import { NavigationsBasic, NavigationsDetails, NavigationsZgroup } from '../pages/components/navigations/navigations';
import { PopoversBasic, PopoversDetails, PopoversZgroup } from '../pages/components/popovers/popovers';
import { RadiosBasic, RadiosZgroup } from '../pages/components/radios/radios';
import { RangesBasic, RangesZgroup } from '../pages/components/ranges/ranges';
import { SearchbarsBasic, SearchbarsZgroup } from '../pages/components/searchbars/searchbars';
import { SegmentsBasic, SegmentsZgroup } from '../pages/components/segments/segments';
import { SelectsBasic, SelectsZgroup } from '../pages/components/selects/selects';
import { SlidesBasic, SlidesZgroup } from '../pages/components/slides/slides';
import { TabsBadges, TabsBadgeDetails, TabsBasic, TabsBasicDetails, TabsIcon } from '../pages/components/tabs/tabs';
import { TabsIconDetails, TabsIconText, TabsIconTextDetails, TabsZgroup } from '../pages/components/tabs/tabs';
import { ToastsBasic, ToastsZgroup } from '../pages/components/toasts/toasts';
import { TogglesBasic, TogglesZgroup } from '../pages/components/toggles/toggles';
import { ToolbarBasic, ToolbarButtons, ToolbarColors, ToolbarColorPage2, ToolbarColorPage3 } from '../pages/components/toolbars/toolbars';
import { ToolbarColorPage4, ToolbarSearchbar, ToolbarSegment, ToolbarsZgroup } from '../pages/components/toolbars/toolbars';
//------- Natives -------
import { NativesZgroup } from '../pages/natives/natives';
import { BarcodeScannersBasic, BarcodeScannersZgroup } from '../pages/natives/barcode-scanners/barcode-scanners';
import { CamerasBasic, CamerasZgroup } from '../pages/natives/cameras/cameras';
import { GoogleMapsJavaScript, GoogleMapsJavaScriptBackground, GoogleMapsNative, GoogleMapsZgroup } from '../pages/natives/google-maps/google-maps';

@NgModule({
  declarations: [
    MyApp, HelloIonicPage,
    ActionSheetsBasic, ActionSheetsZgroup,
    //------- Components (group of 5) -------
    ComponentsZgroup,
    AlertsBasic, AlertsCheckbox, AlertsConfirm, AlertsPrompt, AlertsRadio,
    AlertsZgroup,
    BadgesBasic, BadgesZgroup,
    ButtonsBasic, ButtonsBlock, ButtonsClear, ButtonsComponents, ButtonsFull,
    ButtonsIcons, ButtonsOutline, ButtonsRound, ButtonsSizes, ButtonsZgroup,
    CardsAdvancedMap, CardsAdvancedSocial, CardsAdvancedWeather, CardsBackground,
    CardsBasic, CardsHeader, CardsImage, CardsList, CardsZgroup,
    CheckboxesBasic, CheckboxesZgroup,
    DatetimeBasic, DatetimeZgroup,
    FabsBasic, FabsZgroup,
    GesturesBasic, GesturesZgroup,
    GridsBasic, GridsZgroup,
    IconsBasic, IconsZgroup,
    InputsBasic, InputsFixedInline, InputsFloating, InputsInline, InputsInset,
    InputsPlaceholder, InputsStacked, InputsZgroup,
    ListsAvatar, ListsBasic, ListsDividers, ListsHeaders, ListsIcon,
    ListsInset, ListsItem, ListsItemDetails, ListsMultiline, ListsNoLines,
    ListsSliding, ListsThumbnail, ListsZgroup,
    LoadingBasic, LoadingZgroup,
    MenusBasic, MenusPageOne, MenusPageTwo, MenusPageThree, MenusZgroup,
    ModalsBasic, ModalsBasicContent, ModalsZgroup,
    NavigationsBasic, NavigationsDetails, NavigationsZgroup,
    PopoversBasic, PopoversDetails, PopoversZgroup,
    RadiosBasic, RadiosZgroup,
    RangesBasic, RangesZgroup,
    SearchbarsBasic, SearchbarsZgroup,
    SegmentsBasic, SegmentsZgroup,
    SelectsBasic, SelectsZgroup,
    SlidesBasic, SlidesZgroup,
    TabsBadges, TabsBadgeDetails, TabsBasic, TabsBasicDetails, TabsIcon,
    TabsIconDetails, TabsIconText, TabsIconTextDetails, TabsZgroup,
    ToastsBasic, ToastsZgroup,
    TogglesBasic, TogglesZgroup,
    ToolbarBasic, ToolbarButtons, ToolbarColors, ToolbarColorPage2, ToolbarColorPage3,
    ToolbarColorPage4, ToolbarSearchbar, ToolbarSegment, ToolbarsZgroup,
    //------- Natives -------
    NativesZgroup,
    BarcodeScannersBasic, BarcodeScannersZgroup,
    CamerasBasic, CamerasZgroup,
    GoogleMapsJavaScript, GoogleMapsJavaScriptBackground, GoogleMapsNative, GoogleMapsZgroup
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, HelloIonicPage,
    //------- Components (group of 5) -------
    ComponentsZgroup,
    ActionSheetsBasic, ActionSheetsZgroup,
    AlertsBasic, AlertsCheckbox, AlertsConfirm, AlertsPrompt, AlertsRadio,
    AlertsZgroup,
    BadgesBasic, BadgesZgroup,
    ButtonsBasic, ButtonsBlock, ButtonsClear, ButtonsComponents, ButtonsFull,
    ButtonsIcons, ButtonsOutline, ButtonsRound, ButtonsSizes, ButtonsZgroup,
    CardsAdvancedMap, CardsAdvancedSocial, CardsAdvancedWeather, CardsBackground,
    CardsBasic, CardsHeader, CardsImage, CardsList, CardsZgroup,
    CheckboxesBasic, CheckboxesZgroup,
    DatetimeBasic, DatetimeZgroup,
    FabsBasic, FabsZgroup,
    GesturesBasic, GesturesZgroup,
    GridsBasic, GridsZgroup,
    IconsBasic, IconsZgroup,
    InputsBasic, InputsFixedInline, InputsFloating, InputsInline, InputsInset,
    InputsPlaceholder, InputsStacked, InputsZgroup,
    ListsAvatar, ListsBasic, ListsDividers, ListsHeaders, ListsIcon,
    ListsInset, ListsItem, ListsItemDetails, ListsMultiline, ListsNoLines,
    ListsSliding, ListsThumbnail, ListsZgroup,
    LoadingBasic, LoadingZgroup,
    MenusBasic, MenusPageOne, MenusPageTwo, MenusPageThree, MenusZgroup,
    ModalsBasic, ModalsBasicContent, ModalsZgroup,
    NavigationsBasic, NavigationsDetails, NavigationsZgroup,
    PopoversBasic, PopoversDetails, PopoversZgroup,
    RadiosBasic, RadiosZgroup,
    RangesBasic, RangesZgroup,
    SearchbarsBasic, SearchbarsZgroup,
    SegmentsBasic, SegmentsZgroup,
    SelectsBasic, SelectsZgroup,
    SlidesBasic, SlidesZgroup,
    TabsBadges, TabsBadgeDetails, TabsBasic, TabsBasicDetails, TabsIcon,
    TabsIconDetails, TabsIconText, TabsIconTextDetails, TabsZgroup,
    ToastsBasic, ToastsZgroup,
    TogglesBasic, TogglesZgroup,
    ToolbarBasic, ToolbarButtons, ToolbarColors, ToolbarColorPage2, ToolbarColorPage3,
    ToolbarColorPage4, ToolbarSearchbar, ToolbarSegment, ToolbarsZgroup,
    //------- Natives -------
    NativesZgroup,
    BarcodeScannersBasic, BarcodeScannersZgroup,
    CamerasBasic, CamerasZgroup,
    GoogleMapsJavaScript, GoogleMapsJavaScriptBackground, GoogleMapsNative, GoogleMapsZgroup
  ],
  providers: []
})
export class AppModule {

}
