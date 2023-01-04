import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juguete } from 'src/app/shared/models/juguete.interface';
import * as varGlobals from "../../globals";


@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  headers:HttpHeaders = new HttpHeaders();
  params:HttpParams = new HttpParams();

  base: string;

  constructor(private http: HttpClient) { 

      this.headers.set('content-type','multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin','*');
      this.base =varGlobals.server + '/api';

  }

  getJuguetes(literalAbuscar:string, isBusquedaPorCategoria:boolean, isBusquedaPorBuscador:boolean, numeroPagina:number):Observable<Juguete[]> {
    
 
    this.params.set("literalAbuscar", literalAbuscar);

    if (isBusquedaPorBuscador){
        //return this.http.get<DataPagination>( this.base +'/juguetes/page/2', { headers: this.headers }).pipe(map((dataPagination:DataPagination) => { return dataPagination.data }));
        return this.http.get<Juguete[]>( this.base +'/juguetes/busqueda/page/' + numeroPagina + '/' + literalAbuscar );
    } else if (isBusquedaPorCategoria) {
        //return this.http.get<DataPagination>( this.base +'/juguetes/page/2', { headers: this.headers }).pipe(map((dataPagination:DataPagination) => { return dataPagination.data }));
        return this.http.get<Juguete[]>( this.base +'/juguetes/categoria/page/' + numeroPagina + '/' + literalAbuscar );
    } else {      
        //return this.http.get<DataPagination>( this.base +'/juguetes/page/2', { headers: this.headers }).pipe(map((dataPagination:DataPagination) => { return dataPagination.data }));
        return this.http.get<Juguete[]>( this.base +'/juguetes/page/' + numeroPagina);
    }      

  }


  getJugueteById(identifier:string):Observable<Juguete> {
    // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
     return this.http.get<Juguete>( this.base + '/juguete/' + identifier);
  }


}
