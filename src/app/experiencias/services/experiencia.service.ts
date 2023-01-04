import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as varGlobals from "../../globals";
import { Experiencia } from '../../shared/models/experiencia.interface';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  headers:HttpHeaders = new HttpHeaders();
  base: string;
  
  constructor(private http: HttpClient) { 

      //this.headers.set('Access-Control-Allow-Origin','*');
      this.headers.set('content-type','multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin','*');

      this.base = varGlobals.server + '/api';
  }


  getAllExperiencias(numeroPagina:number):Observable<Experiencia[]> {
    // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
     return this.http.get<Experiencia[]>( this.base +'/experiencia/page/' + numeroPagina );
   }
 
  getExperienciaById(idExperiencia:string | null):Observable<Experiencia> {
   // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
   return this.http.get<Experiencia>( this.base + '/experiencia/' + idExperiencia );
  }

}
