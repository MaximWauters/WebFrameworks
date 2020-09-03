import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';
import { DbService, IGegevens } from '../db.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private sharedSvc: SharedService, private dbSvc: DbService) { }

  private naam: string = '';
  private email: string = '';
  private datum: Date;
  private cameraNaam: string = '';
  private fotoUrl: string = '';
  //private uur: Date;

  private uitDB: IGegevens;
  private ref: string = '';

  ngOnInit() {
    this.naam = this.sharedSvc.Naam;
    this.email = this.sharedSvc.Email;
    this.datum = this.sharedSvc.Datum;
    this.cameraNaam = this.sharedSvc.CameraName;
    this.fotoUrl = this.sharedSvc.PhotoUrl;
  }

  postNaarDb(){
    var nieuweGegevens = {
      naam: this.sharedSvc.Naam,
      email: this.sharedSvc.Email,
      datum: this.sharedSvc.Datum,
      cameraNaam: this.sharedSvc.CameraName,
      photoUrl: this.sharedSvc.PhotoUrl
    }

    this.dbSvc.postGegevens(nieuweGegevens).subscribe( () => {

      this.dbSvc.getReferentieByName(this.naam).subscribe(gegVanDb =>{
        this.ref = gegVanDb[0]._id;
        console.log(gegVanDb[0]._id);
        console.log(nieuweGegevens);
      })
    });

  }

}
