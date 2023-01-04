


export class Nodo { 

    value: string;
    children: Nodo[];
    depth:number;
    imgen_representativa:string;
    

    constructor ( value:string, children:Nodo[], depth:number, imagen_representativa: string ) {

        this.value = value;
        this.children = children;
        this.depth =depth;
        this.imgen_representativa = imagen_representativa;
    }

}
