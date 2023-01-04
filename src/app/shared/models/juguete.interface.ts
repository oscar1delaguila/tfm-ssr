import { Categoria } from "./categoria.interface";



export interface Juguete {

        id:string,
        titulo: string,
        fecha_publicacion: Date,
        descripcion: string,
        precio: number,
        num_votaciones: number,
        marca: string,
        material: string,
        edad:number;
        
        ancho: string,
        largo: string,
        alto:string,
        
        puntuacion: number,
        pro1: string,
        pro2: string,
        pro3: string,
        pro4: string,
        pro5: string,
        pro6: string,
        contra1: string,
        contra2: string,
        contra3: string,
        contra4: string,
        contra5: string,
        contra6: string,
        categoria?: Categoria,
        path_imagen: string,
        imagen1: string,
        imagen2: string,
        imagen3: string,
        imagen4: string,
        imagen5: string,
        imagen6: string,
        imagen7: string,
        imagen8: string,
        publicado:boolean,
        categoria_id?: number,
}
