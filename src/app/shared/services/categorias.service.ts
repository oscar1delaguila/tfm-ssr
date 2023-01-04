import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categoria } from '../../shared/models/categoria.interface';
import * as varGlobals from "../../globals";


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  headers:HttpHeaders = new HttpHeaders();
  base:string;

  constructor(private http: HttpClient) {

    this.headers.set('content-type','application/json').set('Access-Control-Allow-Origin','*');
    this.base = varGlobals.server + '/api';

  }

  getAllCategorias():Observable<Categoria[]> {
    //return this.http.get<data>( '/categorias/').pipe(map((data) => { return data.data }));
    return this.http.get<Categoria[]>( this.base + '/categorias');
  }

  getAllCategoriasByJugueteId(identifier:string):Observable<Categoria> {

   // return this.http.get<data>( '/categoria/' + identifier).pipe(map((data) => { return data.data }));
   return this.http.get<Categoria>( '/categoria/' + identifier);

  }

}
