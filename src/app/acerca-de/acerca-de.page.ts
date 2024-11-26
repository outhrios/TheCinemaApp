import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage {
  photo: string = '';

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,              
        allowEditing: false,      
        resultType: CameraResultType.Uri, 
        source: CameraSource.Camera,
      });
      
      this.photo = image.webPath || ''; 
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }
}
