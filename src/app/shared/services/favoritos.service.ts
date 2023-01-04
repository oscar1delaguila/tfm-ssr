import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorito } from 'src/app/shared/models/favorito.interface';
import * as varGlobals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  headers:HttpHeaders = new HttpHeaders();
  base: string;
  
  constructor(private http: HttpClient) { 
      this.headers.set('content-type','application/json').set('Access-Control-Allow-Origin','*');
      this.base = varGlobals.server + '/api';

  }


  getAllFavoritosByUser(idUsuario:string):Observable<Favorito[]> {
    // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
     return this.http.get<Favorito[]>( this.base +'/favoritos/' + idUsuario);
   }

   getFavoritoByUserAndIdJuguete(jugueteId:string, userId:string):Observable<string> {
    // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
     return this.http.get<string>( this.base +'/favoritos/' + jugueteId + '/' + userId );
   }
   

  createFavorito(favorito:Favorito):Observable<string>{
    return this.http.post<string>( this.base + '/favoritos', favorito);
  }


  deleteFavorito(idFavorito:string):Observable<string> {
    return this.http.delete<string>( this.base + '/favoritos/'+ idFavorito );
  }

}
