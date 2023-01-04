import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/shared/models/experiencia.interface';
import { JugueteTituloId } from 'src/app/shared/models/juguete-titulo-id.interface';
import { PublicadoAdmin } from 'src/app/shared/models/publicado-admin.interface';
import * as varGlobals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaAdminService {

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
 
  getAllExperienciasByUsuario(idUsuario:string, numeroPagina:number ):Observable<Experiencia[]> {
   
    return this.http.get<Experiencia[]>( this.base +'/experiencia/usuario/page' + varGlobals.sep + numeroPagina + varGlobals.sep + idUsuario); 
   //return this.http.get<Experiencia[]>( this.base +'/experiencias/' + idUsuario);
  }

  getExperienciaById(idExperiencia:string | null):Observable<Experiencia> {
   // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
   return this.http.get<Experiencia>( this.base + '/experiencia/' + idExperiencia );
  }

  getAllTitulosJuguetes():Observable<JugueteTituloId[]> {
    return this.http.get<JugueteTituloId[]>( this.base +'/juguetes/titulos/');
  }


  add(experiencia:FormData):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.base + '/experiencia', experiencia);
  }

  update(experiencia:FormData):Observable<Experiencia> {
    //return this.http.post<Experiencia>(this.base + '/experiencia/' + idExperiencia, experiencia );
    return this.http.post<Experiencia>(this.base + '/experiencia-update', experiencia );
  }

  delete(idExperiencia:string):Observable<number> {
    return this.http.delete<number>(this.base + '/experiencia/'+ idExperiencia );
  }

  publicarExperiencia(idExperiencia:string, valorCheckbox:boolean):Observable<PublicadoAdmin> {
   
    if (valorCheckbox){
      return this.http.get<PublicadoAdmin>(this.base + '/experiencia/publicar/'+ idExperiencia );
    
    } else {
    
      return this.http.get<PublicadoAdmin>(this.base + '/experiencia/nopublicar/'+ idExperiencia );
    }

  }

}
