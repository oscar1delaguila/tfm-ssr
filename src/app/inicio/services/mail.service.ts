import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as varGlobals from '../../globals';
import { DudaMail } from '../../shared/models/dudaMail.interface';


@Injectable({
  providedIn: 'root'
})
export class MailService {


  headers:HttpHeaders = new HttpHeaders();
  params:HttpParams = new HttpParams();

  base: string;

  constructor(private http: HttpClient) { 
      this.headers.set('Access-Control-Allow-Origin','*');
      this.base =varGlobals.server + '/api' ;
  }
  
  sendEmail(dudaMail:DudaMail):Observable<string> {
     return this.http.post<string>( this.base + varGlobals.sep + 'contactanos' , dudaMail);
  }


}
