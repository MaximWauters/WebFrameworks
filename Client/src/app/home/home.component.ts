import { Component, OnInit } from '@angular/core';
import { NasaService, Iphoto, Photo, Rover, Camera } from '../nasa.service';
import { SharedService } from '../shared.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  private naam: string = '' ;
  private email: string = '';
  private rest: string = '@ap.be'
  private date: Date = new Date();
  private emailCheck: boolean = true;
  
  ngOnInit() {}

  checkEmail(value: string): void {
    if (!this.email.includes(this.rest)){
      this.emailCheck = false;
    } else if (this.email.includes(this.rest)){
      this.emailCheck = true;
    }
    console.log(value);
    console.log(this.emailCheck);
  }

  saveData(){
    this.sharedSvc.Naam = this.naam;
    this.sharedSvc.Datum = this.date;
    //console.log(_.lowerCase(this.naam) + this.rest);
    //console.log(_.replace('t t g g', /\s+/g, ''));
    this.email = _.replace(_.lowerCase(this.naam) + this.rest,  /\s+/g, '');
    this.sharedSvc.Email = this.email;
  }

}
