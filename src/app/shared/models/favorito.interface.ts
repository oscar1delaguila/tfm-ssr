import { Categoria } from "./categoria.interface";




export interface Favorito {

        id:string,
        titulo_juguete?: string,
        fecha_favorito?: Date,
        precio?: number,
        num_votaciones?: number,
        marca?: string,
        puntuacion?: number,
        categoria?: Categoria,
        categoria_id?: number,
        path_imagen?: string,
        imagen_favorito?: string,
        juguete_id?:string,
        user_id?:string

}
