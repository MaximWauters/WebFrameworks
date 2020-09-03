import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  postGegevens(gegevens: IGegevens){
    return this.http.post<IGegevens>("http://localhost:8001/api/klanten", gegevens);
  }

  getReferentieByName(naam: string){
    return this.http.get<IGegevens>(`http://localhost:8001/api/klanten?naam=${naam}`);
  }


}


export interface IGegevens{
  _id?: string,
  naam: string,
  email: string,
  datum: Date
}