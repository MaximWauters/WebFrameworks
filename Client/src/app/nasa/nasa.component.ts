import { Component, OnInit, OnChanges } from '@angular/core';
import { NasaService, Iphoto, Photo, Rover, Camera } from '../nasa.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  private gegevens: Iphoto;
  private selectie: Photo;
  private photoUrl: string;
  private cameraName: string;
  
  constructor(private svc: NasaService, private sharedSvc: SharedService) { }

  ngOnInit() {
    this.getTheData();
  }

  getTheData(){
    this.svc.getData().subscribe(res=>{
      this.gegevens = res;
      console.log(this.gegevens.photos);
    });
  }

  getPhoto(event){
    this.selectie = event;
    this.photoUrl = this.selectie.img_src;

    this.sharedSvc.PhotoUrl = this.selectie.img_src;
    this.sharedSvc.CameraName = this.selectie.camera.full_name;
    
    console.log(this.photoUrl);
    console.log(this.selectie.camera.full_name);
  }

}
