"use strict";
(self["webpackChunkgegantoys"] = self["webpackChunkgegantoys"] || []).push([["common"],{

/***/ 2656:
/*!****************************************************************!*\
  !*** ./src/app/shared/directivas/match-passwords.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPasswordValidator": () => (/* binding */ ConfirmPasswordValidator)
/* harmony export */ });
function ConfirmPasswordValidator(controlName, matchingControlName) {
    return (formGroup) => {
        let control = formGroup.controls[controlName];
        let matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmPasswordValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPasswordValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 9797:
/*!***************************************!*\
  !*** ./src/app/shared/models/nodo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nodo": () => (/* binding */ Nodo)
/* harmony export */ });
class Nodo {
    constructor(value, children, depth, imagen_representativa) {
        this.value = value;
        this.children = children;
        this.depth = depth;
        this.imgen_representativa = imagen_representativa;
    }
}


/***/ }),

/***/ 1928:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocalStorageService {
    constructor() { }
    set(key, value) {
        localStorage.setItem(key, value);
    }
    get(key) {
        return localStorage.getItem(key) || '';
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6106:
/*!*************************************************!*\
  !*** ./src/app/shared/services/tree.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeService": () => (/* binding */ TreeService)
/* harmony export */ });
/* harmony import */ var _shared_models_nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/nodo */ 9797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TreeService {
    constructor() { }
    //Constructor de nodo
    createNodeRaiz(val, imagen_representativa) {
        return new _shared_models_nodo__WEBPACK_IMPORTED_MODULE_0__.Nodo(val, [], 0, imagen_representativa);
    }
    // Búsqueda por anchura de un nodo en nuestro árbol
    findBFS(tree, value) {
        var queue = [tree];
        while (queue.length) {
            var node = queue.shift();
            if (node.value !== "") {
                if (node.value === value) {
                    return node;
                }
                for (var i = 0; i < node.children.length; i++) {
                    queue.push(node.children[i]);
                }
            }
        }
        return new _shared_models_nodo__WEBPACK_IMPORTED_MODULE_0__.Nodo("", [], 0, "");
    }
    //Añadir elemento al árbol
    addNode(tree, value, toNodeValue, depth, imagenRepresentativa) {
        var queue = [tree];
        //Buscamos el nodo padre (toNodeValue)
        var parent = this.findBFS(tree, toNodeValue);
        //Si encontramos el padre añadimos el nodo creado como hijo
        if (parent.value !== "") {
            //Crea un nuevo objeto de tipo nodo con el valor 'value'.
            var node = new _shared_models_nodo__WEBPACK_IMPORTED_MODULE_0__.Nodo(value, [], depth, imagenRepresentativa);
            parent.children.push(node);
            return queue[0];
        }
        //Si no existe el nodo padre lo añádimos como raíz del árbol.
        else if (tree.value === "") {
            tree = new _shared_models_nodo__WEBPACK_IMPORTED_MODULE_0__.Nodo(value, [], 0, "");
            return tree;
        }
        else {
            throw new Error('Root node is already assigned and not find node parent ');
        }
    }
    ;
    //Elimino elemento del árbol
    removeNode(tree, value) {
        var queue = [tree];
        // caso especial: si el valor está en el
        // nodo raíz reseteamos el árbol
        if (tree.value === value) {
            tree.value = "";
            tree.children = [];
            return tree;
        }
        while (queue.length) {
            var node = queue.shift();
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
    }
    ;
    //Recorrido por anchura (Breadth First Search — BFS)
    traverseBFS(tree, soloHijosNodo, fn) {
        var queue = [tree];
        //solo leemos los hijos directos de tree.
        if (queue.length && soloHijosNodo) {
            var node = queue.shift();
            //fn && fn(node);
            for (var i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        //leemos todo el arbol.
        while (queue.length && !soloHijosNodo) {
            var node = queue.shift();
            //fn && fn(node);
            for (var i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        return queue;
    }
    ;
    //Recorrido por profundidad (Depth First Search — DFS)
    traverseDFS(treeCategorias, fn, method) {
        var current = treeCategorias;
        if (method === "postOrder") {
            this.postOrder(current, fn);
        }
        else {
            this.preOrder(current, fn);
        }
        return current;
    }
    ;
    //Pre-order
    preOrder(node, fn) {
        if (node.value === "") {
            return;
        }
        fn && fn(node);
        for (var i = 0; i < node.children.length; i++) {
            this.preOrder(node.children[i], fn);
        }
    }
    ;
    //Post-orden
    postOrder(node, fn) {
        if (node.value === "") {
            return;
        }
        for (var i = 0; i < node.children.length; i++) {
            this.postOrder(node.children[i], fn);
        }
        fn && fn(node);
    }
    ;
    loadHijosFromNodo(categoriaPadreClicado, treeCategorias) {
        //this.categorias = <string[]>this.treeService.traverseBFS(this.treeService.findBFS(this.treeCategorias, categoriaPadreClicado ), true ).map( (nodoTree:Nodo) => { return nodoTree.value });      
        return this.traverseBFS(this.findBFS(treeCategorias, categoriaPadreClicado), true).map((nodoTree) => { return { categoria: nodoTree.value, imagen_representativa: nodoTree.imgen_representativa }; });
    }
    creaArbolFromCategorias(categorias) {
        //inicializo nodo raiz del arbol de categorias
        let treeCategorias = this.createNodeRaiz("Categorías", "");
        for (var i = 0; i < categorias.length; i++) {
            let categoria = this.findBFS(treeCategorias, categorias[i].nombre_categoria);
            //Si el nodo no existe debemos añadirlo como hijo del nodo padre que le corrsponda,
            //en este caso el nodo padre es el raiz: Categorías
            if (categoria.value === "") {
                treeCategorias = this.addNode(treeCategorias, categorias[i].nombre_categoria, treeCategorias.value, 1, //depth
                categorias[i].imagen_categoria);
            }
            if (categorias[i].subcategoria1 !== "") {
                let subCategoria1 = this.findBFS(treeCategorias, categorias[i].subcategoria1);
                if (subCategoria1.value === "") {
                    treeCategorias = this.addNode(treeCategorias, categorias[i].subcategoria1, categorias[i].nombre_categoria, 2, //depth
                    categorias[i].imagen_subcat1);
                }
                if (categorias[i].subcategoria2 !== "") {
                    let subCategoria2 = this.findBFS(treeCategorias, categorias[i].subcategoria2);
                    if (subCategoria2.value === "") {
                        treeCategorias = this.addNode(treeCategorias, categorias[i].subcategoria2, categorias[i].subcategoria1, 3, //depth
                        categorias[i].imagen_subcat2);
                    }
                }
            }
        }
        //PRINT
        console.log("ARBOL: ", treeCategorias);
        return treeCategorias;
    }
}
TreeService.ɵfac = function TreeService_Factory(t) { return new (t || TreeService)(); };
TreeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TreeService, factory: TreeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map