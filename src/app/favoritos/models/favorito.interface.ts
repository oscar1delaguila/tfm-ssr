import { Categoria } from "src/app/juguete/models/categoria.interface";



export interface Favorito {

        id?:number,
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
        juguete_id?:number,
        user_id?:number

}
