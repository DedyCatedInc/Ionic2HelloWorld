import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  templateUrl: 'pages.html'
})
export class GoogleMapsJavaScriptBackground {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      Geolocation.getCurrentPosition().then((resp) => {
        console.log("Latitude: ", resp.coords.latitude);
        console.log("Longitude: ", resp.coords.longitude);
      });
    });
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    var mapTyp = google.maps.MapTypeId.ROADMAP;
    let mapOptions = {
      'center': latLng,
      'mapTypeId': mapTyp,
      'mapTypeControl': false,
      'scaleControl': false,
      'zoom': 17,
      'zoomControl': false
    }
    var gglAnc = new google.maps.Point(16, 0);
    var mapIcon = {
      'url': 'assets/img/blue_dot.png',
      'anchor': gglAnc
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
      'icon': mapIcon,
      'map': this.map,
      'position': latLng,
      'title': 'my location'
    });
    marker = null;
  }
}
