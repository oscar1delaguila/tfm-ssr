import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as varG from "../../globals";
import { Auth } from '../models/auth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers:HttpHeaders = new HttpHeaders();
  base: string;



  constructor(private http: HttpClient) { 

      this.headers.set('Access-Control-Allow-Origin','*');
      this.base = varG.server + varG.sep + 'api';
  }

  login(auth:Auth):Observable<Auth> {
    // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
    return this.http.post<Auth>( this.base + varG.sep + 'login',  auth );
  }




}
