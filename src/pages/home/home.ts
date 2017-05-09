import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { NgModule } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
 Camera
 ]
})
export class HomePage {
	
  public base64Image: string;
  constructor(public navCtrl: NavController,public camera: Camera) {

  }

    takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType : this.camera.PictureSourceType.CAMERA,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

}
