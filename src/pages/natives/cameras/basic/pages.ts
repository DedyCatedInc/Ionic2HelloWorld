import { Component } from '@angular/core';
import { Camera } from 'ionic-native';

@Component({
  templateUrl: 'pages.html'
})
export class CamerasBasic {
  public base64Image: string;

  constructor() {

  }

  takePhoto() {
    var options = {
      allowEdit: false,
      correctOrientation: true,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      quality: 100,
      saveToPhotoAlbum: false,
      sourceType: Camera.PictureSourceType.CAMERA
    }
    Camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (error) => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
}
