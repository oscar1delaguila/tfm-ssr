"use strict";
(self["webpackChunkgegantoys"] = self["webpackChunkgegantoys"] || []).push([["src_app_favoritos_modules_favoritos_module_ts"],{

/***/ 7326:
/*!***********************************************************************!*\
  !*** ./src/app/favoritos/components/favoritos/favoritos.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosComponent": () => (/* binding */ FavoritosComponent)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../globals */ 7503);
/* harmony import */ var _actions_favoritos_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/favoritos.action */ 7454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/mostrar-imagen-defecto.pipe */ 555);
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/format-date.pipe */ 2328);










function FavoritosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FavoritosComponent_div_1_div_3_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.trustedUrl[i_r5], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FavoritosComponent_div_1_div_3_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mostrarImagenDefecto");
} if (rf & 2) {
    const favorito_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, favorito_r4.imagen_favorito), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FavoritosComponent_div_1_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FavoritosComponent_div_1_div_3_div_1_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const favorito_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.eliminarDeFavoritos(favorito_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Eliminar de favoritos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
const _c0 = function (a1) { return ["/juguete/", a1]; };
function FavoritosComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FavoritosComponent_div_1_div_3_div_1_img_3_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FavoritosComponent_div_1_div_3_div_1_img_4_Template, 2, 3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FavoritosComponent_div_1_div_3_div_1_div_10_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const favorito_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, favorito_r4.juguete_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", favorito_r4.imagen_favorito);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !favorito_r4.imagen_favorito);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](favorito_r4.titulo_juguete);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Desde: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 6, favorito_r4.fecha_favorito, 3), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", favorito_r4.id);
} }
function FavoritosComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FavoritosComponent_div_1_div_3_div_1_Template, 11, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.favoritos);
} }
function FavoritosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Tu lista de favoritos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FavoritosComponent_div_1_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.favoritos);
} }
class FavoritosComponent {
    constructor(sanitizer, store) {
        this.sanitizer = sanitizer;
        this.store = store;
        this.loaded = false;
        this.trustedUrl = [];
        this.server = _globals__WEBPACK_IMPORTED_MODULE_0__.server + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'Juguetes' + _globals__WEBPACK_IMPORTED_MODULE_0__.sep;
        this.store.select('auth').subscribe({
            next: (authState) => {
                this.userId = authState.auth.user_id;
                //PRINT   
                //console.log('Usuario del Store: ', this.user_id);
            }
        });
        this.store.select('favorito').subscribe({
            next: (favoritoState) => {
                this.favoritos = favoritoState.favoritos;
                this.trustedUrl = this.favoritos.map((favorito) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + favorito.categoria_id + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + favorito.juguete_id + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + favorito.imagen_favorito); });
                this.loaded = true;
            }
        });
    }
    ngOnInit() {
        this.getListaFavoritosByUser();
    }
    getListaFavoritosByUser() {
        this.store.dispatch(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_1__.getAllFavoritosByUser({ idUser: this.userId }));
    }
    eliminarDeFavoritos(idFavorito) {
        this.store.dispatch(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_1__.deleteFavorito({ idFavorito: idFavorito }));
    }
}
FavoritosComponent.ɵfac = function FavoritosComponent_Factory(t) { return new (t || FavoritosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
FavoritosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FavoritosComponent, selectors: [["app-favoritos"]], decls: 2, vars: 2, consts: [["class", "w-screen h-screen", 4, "ngIf"], ["class", "contenedor-pagina", 4, "ngIf"], [1, "w-screen", "h-screen"], [1, "mx-auto", "top:32", "sm:top-96"], [1, "contenedor-pagina"], [1, "titulo-pagina"], ["class", "flex flex-wrap justify-left", 4, "ngIf"], [1, "flex", "flex-wrap", "justify-left"], ["class", "w-1/2 sm:w-1/3 2xl:w-1/4  sm:p-5 2xl:p-9 pr-2", 4, "ngFor", "ngForOf"], [1, "w-1/2", "sm:w-1/3", "2xl:w-1/4", "sm:p-5", "2xl:p-9", "pr-2"], ["mat-card-sm-image", "", 1, "border-solid", "border", "rounded", "border-silver", "my-3"], [1, "text-decoration-none", 3, "routerLink"], ["class", "w-full h-32 sm:h-48 2xl:h-80 object-fit", 3, "src", 4, "ngIf"], ["class", "w-full h-32 sm:h-48 2xl:h-80 object-fit imagen-vacia", 3, "src", 4, "ngIf"], [1, "text-sm", "sm:text-base", "font-thin", "text-left", "px-2", "py-2", "sm:p-4", "text-orange-electric"], [1, "text-xs", "text-left", "py-2", "px-2", "sm:p-4"], ["class", "py-2 px-2", 4, "ngIf"], [1, "w-full", "h-32", "sm:h-48", "2xl:h-80", "object-fit", 3, "src"], [1, "w-full", "h-32", "sm:h-48", "2xl:h-80", "object-fit", "imagen-vacia", 3, "src"], [1, "py-2", "px-2"], ["type", "button", 1, "btn", "btn-danger", "py-2", "px-2", "sm:px-4", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-star-fill", "sm:w-5", "sm:h-5", "w-4", "h-4", "text-naranja-oscuro", "inline", "mr-1", "sm:mr-3", "align-middle"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], [1, "align-middle", "text-xs", "sm:text-sm", "text-naranja-oscuro", "hover:text-white"]], template: function FavoritosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FavoritosComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FavoritosComponent_div_1_Template, 4, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _shared_pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_2__.MostrarImagenDefectoPipe, _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_3__.FormatDatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0b3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2994:
/*!***************************************************************!*\
  !*** ./src/app/favoritos/modules/favoritos-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosRoutingModule": () => (/* binding */ FavoritosRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/favoritos/favoritos.component */ 7326);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_0__.FavoritosComponent,
    },
];
class FavoritosRoutingModule {
}
FavoritosRoutingModule.ɵfac = function FavoritosRoutingModule_Factory(t) { return new (t || FavoritosRoutingModule)(); };
FavoritosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FavoritosRoutingModule });
FavoritosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FavoritosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 906:
/*!*******************************************************!*\
  !*** ./src/app/favoritos/modules/favoritos.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosModule": () => (/* binding */ FavoritosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favoritos-routing.module */ 2994);
/* harmony import */ var _components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/favoritos/favoritos.component */ 7326);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var src_app_shared_modules_mostrar_imagen_defecto_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/mostrar-imagen-defecto.module */ 9049);
/* harmony import */ var src_app_shared_modules_format_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/format-date.module */ 510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class FavoritosModule {
}
FavoritosModule.ɵfac = function FavoritosModule_Factory(t) { return new (t || FavoritosModule)(); };
FavoritosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FavoritosModule });
FavoritosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        src_app_shared_modules_mostrar_imagen_defecto_module__WEBPACK_IMPORTED_MODULE_2__.MostrarImagenDefectoModule,
        src_app_shared_modules_format_date_module__WEBPACK_IMPORTED_MODULE_3__.FormatDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
        _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritosRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FavoritosModule, { declarations: [_components_favoritos_favoritos_component__WEBPACK_IMPORTED_MODULE_1__.FavoritosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        src_app_shared_modules_mostrar_imagen_defecto_module__WEBPACK_IMPORTED_MODULE_2__.MostrarImagenDefectoModule,
        src_app_shared_modules_format_date_module__WEBPACK_IMPORTED_MODULE_3__.FormatDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
        _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritosRoutingModule] }); })();


/***/ }),

/***/ 510:
/*!******************************************************!*\
  !*** ./src/app/shared/modules/format-date.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatDateModule": () => (/* binding */ FormatDateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/format-date.pipe */ 2328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class FormatDateModule {
}
FormatDateModule.ɵfac = function FormatDateModule_Factory(t) { return new (t || FormatDateModule)(); };
FormatDateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormatDateModule });
FormatDateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormatDateModule, { declarations: [_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatDatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatDatePipe] }); })();


/***/ }),

/***/ 9049:
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/mostrar-imagen-defecto.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarImagenDefectoModule": () => (/* binding */ MostrarImagenDefectoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/mostrar-imagen-defecto.pipe */ 555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class MostrarImagenDefectoModule {
}
MostrarImagenDefectoModule.ɵfac = function MostrarImagenDefectoModule_Factory(t) { return new (t || MostrarImagenDefectoModule)(); };
MostrarImagenDefectoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MostrarImagenDefectoModule });
MostrarImagenDefectoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MostrarImagenDefectoModule, { declarations: [_pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_0__.MostrarImagenDefectoPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_0__.MostrarImagenDefectoPipe] }); })();


/***/ }),

/***/ 2328:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/format-date.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatDatePipe": () => (/* binding */ FormatDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FormatDatePipe {
    transform(value, ...args) {
        let dd;
        let mm;
        let yyyy;
        let ddFormat;
        let mmFormat;
        let newFormat = '';
        let dateTransform = new Date(value ? value : '');
        let type = args[0];
        dd = dateTransform.getDate();
        mm = dateTransform.getMonth() + 1;
        yyyy = dateTransform.getFullYear();
        ddFormat = this.needZero(dd);
        mmFormat = this.needZero(mm);
        if (type === 1) {
            newFormat = ddFormat + mmFormat + yyyy;
        }
        if (type === 2) {
            newFormat = ddFormat + ' / ' + mmFormat + ' / ' + yyyy;
        }
        if (type === 3) {
            newFormat = ddFormat + '/' + mmFormat + '/' + yyyy;
        }
        if (type === 4) {
            newFormat = yyyy + '-' + mmFormat + '-' + ddFormat;
        }
        return newFormat;
    }
    needZero(checkNumber) {
        return checkNumber < 10 ? '0' + checkNumber : String(checkNumber);
    }
}
FormatDatePipe.ɵfac = function FormatDatePipe_Factory(t) { return new (t || FormatDatePipe)(); };
FormatDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatDate", type: FormatDatePipe, pure: true });


/***/ }),

/***/ 555:
/*!*************************************************************!*\
  !*** ./src/app/shared/pipes/mostrar-imagen-defecto.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarImagenDefectoPipe": () => (/* binding */ MostrarImagenDefectoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MostrarImagenDefectoPipe {
    transform(value, ...args) {
        return value ? value : 'assets/imagen-defecto/image-regular.svg';
    }
}
MostrarImagenDefectoPipe.ɵfac = function MostrarImagenDefectoPipe_Factory(t) { return new (t || MostrarImagenDefectoPipe)(); };
MostrarImagenDefectoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mostrarImagenDefecto", type: MostrarImagenDefectoPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_favoritos_modules_favoritos_module_ts.js.map