import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private naam: string;
  private email: string;
  private datum: Date;
  private cameraName: string;
  private photoUrl: string;
  

  get Naam(): string {
    return this.naam;
  }

  set Naam(value: string){
    this.naam = value;
  }

  get Email(): string {
    return this.email;
  }

  set Email(value: string){
    this.email = value;
  }
  
  get Datum(): Date {
    return this.datum;
  }

  set Datum(value: Date){
    this.datum = value;
  }

  get CameraName(): string {
    return this.cameraName;
  }

  set CameraName(value: string){
    this.cameraName = value;
  }

  get PhotoUrl(): string {
    return this.photoUrl;
  }

  set PhotoUrl(value: string){
    this.photoUrl = value;
  }
  

}
