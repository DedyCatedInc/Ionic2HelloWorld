import { Component} from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Diagnostic, GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
  templateUrl: 'pages.html'
})
export class GoogleMapsNative {
  map: GoogleMap;

  constructor(public navCtrl: NavController, private platform: Platform) {
    platform.ready().then(() => {
      this.checkGpsLocationEnabled();
    });
  }

  checkGpsLocationEnabled() {
    let successCallback = (scb) => {
      console.log('checkGpsLocationEnabled successCallback ' + scb);
      if (scb) {
        this.checkLocationEnabled();
      }
    };
    let errorCallback = (ecb) => {
      console.log('checkGpsLocationEnabled errorCallback ' + ecb);
    };
    Diagnostic.isGpsLocationEnabled().then(successCallback, errorCallback);
  }

  checkLocationAuthorized() {
    let successCallback = (scb) => {
      console.log('checkLocationAuthorized successCallback ' + scb);
      if (scb) {
        this.loadMap();
      }
      else {
        Diagnostic.requestRuntimePermission(Diagnostic.permission.ACCESS_FINE_LOCATION);
      }
    };
    let errorCallback = (ecb) => {
      console.log('checkLocationAuthorized errorCallback ' + ecb);
    };
    Diagnostic.isLocationAuthorized().then(successCallback, errorCallback);
  }

  checkLocationEnabled() {
    let successCallback = (scb) => {
      console.log('checkLocationEnabled successCallback ' + scb);
      if (scb) {
        this.checkLocationAuthorized();
      }
    };
    let errorCallback = (ecb) => {
      console.log('checkLocationEnabled errorCallback ' + ecb);
    };
    Diagnostic.isLocationEnabled().then(successCallback, errorCallback);
  }

  loadMap() {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(position => {
        console.info('Using Navigator!');
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        console.info(lat);
        console.info(lng);
        let latLng = new GoogleMapsLatLng(lat, lng);
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'camera': {
            'bearing': 50,
            'latLng': latLng,
            'tilt': 30,
            'zoom': 15
          },
          'controls': {
            'compass': true,
            'indoorPicker': true,
            'myLocationButton': true,
            'zoom': true
          },
          'gestures': {
            'rotate': true,
            'scroll': true,
            'tilt': true,
            'zoom': true
          }
        });
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Maps Native is ready!');
        });
      }, error => {
        console.log(error);
      }, options);
    }
  }
}
