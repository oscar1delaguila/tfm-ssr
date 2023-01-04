import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juguete } from '../../shared/models/juguete.interface';
import * as varGlobals from "../../globals";
import { PublicadoAdmin } from 'src/app/shared/models/publicado-admin.interface';


@Injectable({
  providedIn: 'root'
})
export class JuguetesAdminService {

  headers:HttpHeaders = new HttpHeaders();
  params:HttpParams = new HttpParams();

  base: string;

  constructor(private http: HttpClient) { 

      this.headers.set('content-type','multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin','*');
      this.base =varGlobals.server + '/api';

  }


  getAllJuguetes(numeroPagina:number):Observable<Juguete[]> {
    return this.http.get<Juguete[]>( this.base +'/juguetes/page/' + numeroPagina);
  }

  getJugueteById(identifier:string):Observable<Juguete> {
    // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
     return this.http.get<Juguete>( this.base + '/juguete/' + identifier);
  }

  add(juguete:FormData):Observable<Juguete>{
    return this.http.post<Juguete>(this.base + '/juguete', juguete);
  }

  update(juguete:FormData):Observable<number> {
    return this.http.post<number>(this.base + '/juguete-update', juguete);
  }

  delete(idJuguete:string):Observable<boolean> {
    return this.http.delete<boolean>(this.base + '/juguete/'+ idJuguete );
  }

  publicarJuguete(idJuguete:string, valorCheckbox:boolean):Observable<PublicadoAdmin> {
   
    if (valorCheckbox){
      return this.http.get<PublicadoAdmin>(this.base + '/juguete/publicar/'+ idJuguete );
    
    } else {
    
      return this.http.get<PublicadoAdmin>(this.base + '/juguete/nopublicar/'+ idJuguete );
    }

  }

  




}
