import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as varG from "../../globals";
import { Usuario } from '../../shared/models/usuario.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  headers:HttpHeaders = new HttpHeaders();
  base: string;



  constructor(private http: HttpClient) { 

      this.headers.set('Access-Control-Allow-Origin','*');
      this.base = varG.server + varG.sep + 'api';
  }



  register(usuario:Usuario):Observable<Usuario> {
    // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
     return this.http.post<Usuario>( this.base + varG.sep + 'register', usuario);
  }

  getUserById(idUser:string):Observable<Usuario> {
    return this.http.get<Usuario>( this.base + varG.sep + 'sesion' + varG.sep + idUser);
  }

  updateUser(usuarioId:string, usuario:Usuario ):Observable<Usuario> {
    return this.http.put<Usuario>(this.base + varG.sep +'sesion' + varG.sep + usuarioId, usuario);
  }

  deleteUser(usuarioId:number):Observable<boolean> {
    return this.http.delete<boolean>(this.base + '/sesion/'+ usuarioId );
  }


}
