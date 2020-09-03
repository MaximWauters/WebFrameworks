import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private key : string = "sGwtBiunTptp6FycDk96NeLfflELD3UksWWKQmNf";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Iphoto>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.key}`)
  }
}

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface Iphoto {
  photos: Photo[];
}