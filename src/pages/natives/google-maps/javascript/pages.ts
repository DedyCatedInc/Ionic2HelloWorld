import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  templateUrl: 'pages.html'
})
export class GoogleMapsJavaScript {
  @ViewChild('map') mapElement: ElementRef;
  latitude: any;
  longitude: any;
  map: any;

  constructor(platform: Platform) {
    this.latitude = 0;
    this.longitude = 0;
    platform.ready().then(() => {
      Geolocation.getCurrentPosition().then((resp) => {
        console.log("Latitude: ", resp.coords.latitude);
        console.log("Longitude: ", resp.coords.longitude);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.loadMap();
      });
    });
  }

  ionViewDidLoad() {
    if (this.latitude == 0 && this.latitude == 0) {
      this.latitude = -34.9290;
      this.longitude = 138.6010;
    }
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    var mapTyp = google.maps.MapTypeId.ROADMAP;
    let mapOpt = {
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
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOpt);
    var marker = new google.maps.Marker({
      'icon': mapIcon,
      'map': this.map,
      'position': latLng,
      'title': 'my location'
    });
    marker = null;
  }
}
