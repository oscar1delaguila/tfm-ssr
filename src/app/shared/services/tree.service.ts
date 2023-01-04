import { Injectable } from '@angular/core';
import { CategoriaRenderizable } from '../../shared/models/categoria-renderizable.interface';
import { Categoria } from '../../shared/models/categoria.interface';
import { Nodo } from '../../shared/models/nodo';

@Injectable({
  providedIn: 'root'
})
export class TreeService {


  constructor() { }

  //Constructor de nodo
  createNodeRaiz(val:string, imagen_representativa: string):Nodo {
    return new Nodo( val, [], 0, imagen_representativa );
  }


  // Búsqueda por anchura de un nodo en nuestro árbol
  findBFS( tree:Nodo, value:string):Nodo {

    var queue = [ tree ];
    while (queue.length) {

      var node:Nodo = <Nodo>queue.shift();  
      if (node.value !== "") {
        if (node.value === value) {
          return node;
        }
        for (var i=0; i < node.children.length; i++) {
          queue.push(node.children[i]);
        }
      }
    }

    return new Nodo("", [], 0, "" );
  }


  //Añadir elemento al árbol
  addNode(tree:Nodo, value:string, toNodeValue: string, depth: number, imagenRepresentativa:string): Nodo {


    var queue:Nodo[] = [tree];

    //Buscamos el nodo padre (toNodeValue)
    var parent:Nodo = this.findBFS(tree, toNodeValue);

    //Si encontramos el padre añadimos el nodo creado como hijo
    if (parent.value!=="") {
      
      //Crea un nuevo objeto de tipo nodo con el valor 'value'.
      var node:Nodo = new Nodo(value,[], depth, imagenRepresentativa);
      parent.children.push(node);
      return queue[0];

    }
    //Si no existe el nodo padre lo añádimos como raíz del árbol.
    else if (tree.value === "") {
      tree = new Nodo( value, [], 0, "");
      return tree;
    }
    else {
      throw new Error('Root node is already assigned and not find node parent ');
    }

  };

  
  //Elimino elemento del árbol
  removeNode(tree:Nodo, value:string):Nodo {

    var queue = [tree];

    // caso especial: si el valor está en el
    // nodo raíz reseteamos el árbol
    if (tree.value === value) {
      tree.value = "";
      tree.children = [];
      return tree;
    }

    while (queue.length) {
      var node:Nodo = <Nodo>queue.shift();
      for (var i = 0; i < node.children.length; i++) {
        if (node.children[i].value === value) {
          node.children.splice(i, 1);
        }
        else {
          queue.push(node.children[i]);
        }
      }
    }

    return queue[0];
  };

  //Recorrido por anchura (Breadth First Search — BFS)
  traverseBFS(tree:Nodo, soloHijosNodo:boolean, fn?:Function ):Nodo[] {

    var queue = [tree];
    //solo leemos los hijos directos de tree.
    if (queue.length && soloHijosNodo ) {
      var node:Nodo = <Nodo>queue.shift();
      //fn && fn(node);
      for (var i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }

    //leemos todo el arbol.
    while (queue.length && !soloHijosNodo) {
      var node:Nodo = <Nodo>queue.shift();
      //fn && fn(node);
      for (var i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }

    return queue;

  };


  //Recorrido por profundidad (Depth First Search — DFS)
  traverseDFS( treeCategorias: Nodo, fn:Function, method:string):Nodo {

    var current = treeCategorias;
    if (method! === "postOrder") {
      this.postOrder(current, fn);
    }
    else {
      this.preOrder(current, fn);
    }

    return current;

  };


  //Pre-order
   preOrder(node:Nodo, fn:Function):void {

    if (node.value === "") {
      return;
    }
    fn && fn(node);
    for (var i = 0; i < node.children.length; i++) {
      this.preOrder(node.children[i], fn);
    }

  };

  //Post-orden
  postOrder(node:Nodo, fn:Function):void {

    if (node.value === "") {
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      this.postOrder(node.children[i], fn);
    }
    fn && fn(node);
  };


  loadHijosFromNodo(categoriaPadreClicado:string, treeCategorias: Nodo): CategoriaRenderizable [] {
    //this.categorias = <string[]>this.treeService.traverseBFS(this.treeService.findBFS(this.treeCategorias, categoriaPadreClicado ), true ).map( (nodoTree:Nodo) => { return nodoTree.value });      
    return <CategoriaRenderizable[]> this.traverseBFS(this.findBFS(treeCategorias, categoriaPadreClicado ), true ).map( (nodoTree:Nodo) => { return  { categoria:nodoTree.value, imagen_representativa: nodoTree.imgen_representativa }});      
  }



  creaArbolFromCategorias(categorias: Categoria[]): Nodo {


    //inicializo nodo raiz del arbol de categorias
    let treeCategorias:Nodo = this.createNodeRaiz("Categorías", "");
    

    for (var i=0; i < categorias.length; i++ ) {

      let categoria:Nodo = this.findBFS( treeCategorias, categorias[i].nombre_categoria);
      //Si el nodo no existe debemos añadirlo como hijo del nodo padre que le corrsponda,
      //en este caso el nodo padre es el raiz: Categorías
      if (categoria.value==="") {
        treeCategorias = this.addNode(
                                        treeCategorias, 
                                        categorias[i].nombre_categoria, 
                                        treeCategorias.value,
                                        1, //depth
                                        categorias[i].imagen_categoria
                                     )
      }

      if (categorias[i].subcategoria1 !=="") {

        let subCategoria1 = this.findBFS(treeCategorias, categorias[i].subcategoria1);
        if (subCategoria1.value==="") {
          treeCategorias = this.addNode(
                                          treeCategorias, 
                                          categorias[i].subcategoria1, 
                                          categorias[i].nombre_categoria,
                                          2, //depth
                                          categorias[i].imagen_subcat1
                                       )
        }

        if (categorias[i].subcategoria2 !=="") {

          let subCategoria2 = this.findBFS(treeCategorias, categorias[i].subcategoria2);
          if (subCategoria2.value==="") {
            treeCategorias = this.addNode(
                                            treeCategorias, 
                                            categorias[i].subcategoria2, 
                                            categorias[i].subcategoria1,
                                            3, //depth
                                            categorias[i].imagen_subcat2
                                         )
            }
        }
      }
    }

    //PRINT
    console.log("ARBOL: ", treeCategorias);
    return treeCategorias;

  }



}
