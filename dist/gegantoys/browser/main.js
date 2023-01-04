"use strict";
(self["webpackChunkgegantoys"] = self["webpackChunkgegantoys"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _garantias_garantias_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./garantias/garantias.component */ 784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    /*
      {
        path: 'inicio',
        component: InicioComponent,
      },
      */
    /*
      {
        path: 'listado',
        component: JugueteListadoComponent,
        canActivate: [AuthGuard],
      },
    */
    /*
      {
        path: 'favoritos',
        component: FavoritosComponent,
        canActivate: [AuthGuard],
      },
    */
    /*
      {
        path: 'login',
        component: LoginComponent,
      },
    
      {
        path: 'register',
        component: RegisterComponent,
      },
    */
    /*
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard],
      },
    
      {
        path: 'experiencias-listado',
        component: ExperienciaListadoComponent,
        canActivate: [AuthGuard],
      },
    */
    /*
     {
       path: 'experiencias',
       component: ExperienciaBlogComponent
     },
   
     {
       path: 'experiencias/:id',
       component: ExperienciaBlogComponent
     },
   
     {
       path: 'experiencia/:id',
       component: ExperienciaDetalleComponent
     },
   */
    /*
      {
        path: 'experiencia-form/:id',
        component: ExperienciaFormComponent,
        canActivate: [AuthGuard],
      },
    */
    /*
      {
        path: 'juguetes',
        component: JugueteCatalogoComponent,
      },
    
      {
        path: 'juguetes/:id',
        component: JugueteCatalogoComponent,
      },
    
      {
        path: 'juguete/:id',
        component: JugueteDetalleComponent
      },
    */
    /*
      {
        path: 'juguete-form/:id',
        component: JugueteFormComponent,
        canActivate: [AuthGuard],
      },
    */
    {
        path: 'garantias',
        component: _garantias_garantias_component__WEBPACK_IMPORTED_MODULE_0__.GarantiasComponent,
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("src_app_inicio_modules_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/modules/inicio.module */ 1189)).then(m => m.InicioModule)
    },
    {
        path: 'favoritos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("src_app_favoritos_modules_favoritos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./favoritos/modules/favoritos.module */ 906)).then(m => m.FavoritosModule)
    },
    {
        path: 'juguetes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_juguete_modules_juguete_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./juguete/modules/juguete.module */ 1293)).then(m => m.JugueteModule)
    },
    {
        path: 'juguetes-listado',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("default-src_app_shared_guards_auth_guard_ts-src_app_shared_modules_file-upload_module_ts-src_-b09f2d"), __webpack_require__.e("common"), __webpack_require__.e("src_app_juguete-admin_modules_juguete-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./juguete-admin/modules/juguete-admin.module */ 7025)).then(m => m.JugueteAdminModule)
    },
    {
        path: 'experiencias',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("src_app_experiencias_modules_experiencias_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./experiencias/modules/experiencias.module */ 8714)).then(m => m.ExperienciasModule)
    },
    {
        path: 'experiencias-listado',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("default-src_app_shared_guards_auth_guard_ts-src_app_shared_modules_file-upload_module_ts-src_-b09f2d"), __webpack_require__.e("src_app_experiencias-admin_modules_experiencias-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./experiencias-admin/modules/experiencias-admin.module */ 8686)).then(m => m.ExperienciasAdminModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_auth_modules_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/modules/auth.module */ 5969)).then(m => m.AuthModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_usuario_modules_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./usuario/modules/register.module */ 4698)).then(m => m.RegisterModule)
    },
    {
        path: 'perfil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_usuario_modules_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./usuario/modules/perfil.module */ 1367)).then(m => m.PerfilModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("src_app_inicio_modules_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/modules/inicio.module */ 1189)).then(m => m.InicioModule),
    },
    {
        path: '**',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("src_app_inicio_modules_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/modules/inicio.module */ 1189)).then(m => m.InicioModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _auth_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/actions/auth.action */ 4393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);






function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AppComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 59)(1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inicio sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24)(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin Juguetes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r3.isUsuarioAdmin);
} }
function AppComponent_div_51_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 69)(1, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62)(1, "ul", 63)(2, "li", 64)(3, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 67)(6, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 69)(8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 69)(12, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_51_Template_li_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 79)(19, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_div_51_li_20_Template, 4, 0, "li", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isUsuarioAdmin);
} }
class AppComponent {
    constructor(router, store, activatedRoute) {
        this.router = router;
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.title = 'gegantoys';
        this.store.select('auth').subscribe({
            next: (authState) => {
                this.isUsuarioAutentificado = authState.auth.access_token ? true : false;
                this.isUsuarioAdmin = authState.auth.isAdmin;
            }
        });
    }
    ngOnInit() {
    }
    logout() {
        this.store.dispatch(_auth_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__.logout());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 94, vars: 9, consts: [[1, "w-full", "fixed-top", "hidden", "sm:block"], [1, "nav", "nav-pills", "menu-principal", "border-SeaShell"], [1, "nav-item", "pt-2", "w-16", "sm:w-36"], ["routerLink", "/inicio", "routerLinkActive", "active", 1, "nav-link", "text-center"], ["routerLink", "/juguetes", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "text-center"], ["routerLink", "/garantias", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "text-center"], ["routerLink", "/experiencias", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "text-center"], ["class", "nav-item pt-2 w-16 sm:w-36", 4, "ngIf"], [1, "block", "sm:hidden", "text-left", "pt-2", "text-red-dark"], ["mat-icon-button", "", "aria-label", "Men\u00FA GeganToys", 3, "matMenuTriggerFor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", "fill", "currentColor", 1, "w-14", "h-8", "inline"], ["d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"], ["routerLink", "/inicio", 1, "text-red-dark", "font-thin", "text-base", "align-middle", "ml-5"], [1, "bg-SeaShell", "pr-10"], ["menu", "matMenu"], [1, "pl-8", "pt-5", "text-sm", "text-red-dark", "font-medium"], ["mat-menu-item", ""], ["routerLink", "/juguetes", 1, "text-sm", "py-2", "px-3", "text-red-dark", "font-thin"], ["routerLink", "/experiencias", 1, "text-sm", "py-2", "px-3", "text-red-dark", "font-thin"], ["routerLink", "/garantias", 1, "text-sm", "px-3", "text-red-dark", "font-thin"], ["mat-menu-item", "", "class", "", 4, "ngIf"], [1, "pl-8", "text-sm", "text-red-dark", "font-medium", "mt-4"], ["mat-menu-item", "", 1, "py-0", 3, "disabled"], ["routerLink", "/perfil", 1, "text-sm", "p-3", "text-red-dark", "font-thin"], ["mat-menu-item", "", 3, "disabled"], ["routerLink", "/favoritos", 1, "text-sm", "p-3", "text-red-dark", "font-thin"], ["routerLink", "/experiencias-listado", 1, "text-sm", "p-3", "text-red-dark", "font-thin"], ["routerLink", "/inicio", 1, "text-sm", "p-3", "text-red-dark", "font-thin", 3, "click"], ["mat-menu-item", "", 3, "disabled", 4, "ngIf"], ["class", " w-full sm:w-16 sm:h-fit bg-salmon sm:z-50  bottom-0 sm:top-1/3  fixed sm:block hidden ", 4, "ngIf"], ["id", "postFeedback", 1, ""], [1, "row", "m-0", "py-3", "border-metal", "border-solid", "border-t-2", "mx-auto", "bg-red-transparent", "opacity-40", "text-white", "bottom-0"], [1, "flex", "justify-center"], [1, "my-4", "mx-2", "sm:mx-10", "text-sm", "sm:text-lg", "font-thin"], ["href", "/inicio#contacto"], ["href", "/garantias#nosotros"], ["href", "/inicio#faqs"], [1, "w-5/6", "sm:w-3/4", "mx-auto"], [1, "flex", "justify-start", "w-1/2", "pl-2", "sm:px-12"], [1, "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 512 512", 1, "w-6", "h-6", "sm:w-10", "sm:h-10", "inline", "px-1", "aling-middle"], ["d", "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"], [1, "text-xs", "sm:text-lg", "text-white", "align-middle", "font-thin"], [1, "flex", "justify-end", "w-1/2", "pr-2", "sm:px-9"], ["target", "_blank", "href", "https://pinterest.com/pin/create/button/?url=https://www.gegantoys.com/assets/pinterest.jpg&media=https://www.gegantoys.com"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 496 512", 1, "bi", "bi-instagram", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["d", "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"], ["target", "_blank", "href", "https://twitter.com/?status=Me gusta https://www.gegantoys.com"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-twitter", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"], ["target", "_blank", "href", "https://www.facebook.com/sharer.php?u=https://www.gegantoys.com/"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "w-6", "h-6", "sm:w-8", "sm:h-8", "bi", "bi-facebook"], ["d", "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"], ["routerLink", "./inicio", "fragment", "contacto"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "w-6", "h-6", "sm:w-8", "sm:h-8", "bi", "bi-envelope", "inline"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"], ["routerLink", "/login", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 512 512", 1, "mx-auto", "w-6", "h-6", "sm:w-6", "sm:h-6"], ["d", "M352 96h64c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96H352c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-7.5 177.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H160v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"], ["mat-menu-item", "", 1, ""], ["routerLink", "/login", 1, "text-sm", "p-3", "text-red-dark", "font-thin", "mt-8"], ["routerLink", "/juguetes-listado", 1, "text-sm", "p-3", "text-red-dark", "font-thin"], [1, "w-full", "sm:w-16", "sm:h-fit", "bg-salmon", "sm:z-50", "bottom-0", "sm:top-1/3", "fixed", "sm:block", "hidden"], [1, "nav", "nav-pills", "justify-center", "mx-auto"], [1, "nav-item", "dropdown", "sm:w-20", "w-12"], ["routerLinkActive", "active", "routerLink", "/perfil", "aria-current", "page", 1, "nav-link", "text-center", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-circle", "mx-auto", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["d", "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"], ["fill-rule", "evenodd", "d", "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"], [1, "nav-item", "pt-2", "sm:w-20", "w-12"], ["routerLink", "/experiencias-listado", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "text-center", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-blockquote-left", "mx-auto", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["d", "M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z"], ["routerLink", "/favoritos", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "text-center", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-star-fill", "mx-auto", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], [1, "nav-item", "pt-2", "sm:w-20", "w-12", 3, "click"], ["routerLink", "/inicio", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "text-center", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-box-arrow-right", "mx-auto", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["fill-rule", "evenodd", "d", "M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"], ["fill-rule", "evenodd", "d", "M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"], ["class", "nav-item pt-2 sm:w-20 w-12", 4, "ngIf"], ["routerLink", "/juguetes-listado", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "text-center", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-brush-fill", "mx-auto", "w-6", "h-6", "sm:w-8", "sm:h-8"], ["d", "M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "ul", 1)(3, "li", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " GeganToys ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 2)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Juguetes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 2)(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 2)(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_li_15_Template, 4, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "GeganToys");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-menu", 13, 14)(24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "NAVEGA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16)(27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Juguetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 16)(30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Blog experiencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 16)(33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Sobre Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AppComponent_button_35_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "AHORA PUEDES HACER...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 22)(39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Tu perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 24)(42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Tus favoritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24)(45, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tus Experiencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 24)(48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_48_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Cerrar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AppComponent_button_50_Template, 3, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AppComponent_div_51_Template, 21, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "footer", 31)(56, "div", 32)(57, "div", 33)(58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 33)(61, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Garant\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 33)(64, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 33)(67, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "hr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 32)(71, "div", 38)(72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "2022, Company Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 43)(78, "div", 39)(79, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 39)(83, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "svg", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 39)(87, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 39)(91, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "svg", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUsuarioAutentificado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUsuarioAutentificado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isUsuarioAutentificado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isUsuarioAutentificado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isUsuarioAutentificado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isUsuarioAutentificado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUsuarioAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUsuarioAutentificado);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger], styles: ["a.nav-link[_ngcontent-%COMP%] {\n  \n  color: #AC2508;\n  font-weight: 100;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  \n  background-color: transparent;\n  border-radius: 0;\n  color: orangered;\n}\n\nheader[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: none;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n\nfooter[_ngcontent-%COMP%] {\n  min-height: 20vh;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: #fff6e3;\n  color: #c34f3e;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #c34f3e;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: darkorange;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  margin-left: 0;\n}\n\n.fa-right-to-bracket[_ngcontent-%COMP%] {\n  color: #c34f3e;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n}\n\n#postFeedback[_ngcontent-%COMP%] {\n  display: none;\n  \n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  z-index: 99;\n  font-size: 14px;\n  padding: 5px 10px;\n  bottom: 0px;\n  right: 0px;\n  position: fixed;\n  border-top-left-radius: 5px;\n}\n\n.requestOk[_ngcontent-%COMP%] {\n  color: white;\n  background-color: green;\n}\n\n.requestKo[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n}\n\n.show[_ngcontent-%COMP%] {\n  \n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFZQTtFQUNFLGFBQUE7RUFDRix3QkFBQTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQVRGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFWRjs7QUFjQTtFQUNFLHVCQUFBO0VBRUEseUNBQUE7QUFYRjs7QUF1QkE7RUFDRTtJQUNFLFVBQUE7RUFaRjtFQWNBO0lBQ0UsVUFBQTtFQVpGO0FBQ0Y7O0FBd0JBO0VBQ0U7SUFDRSxVQUFBO0VBZEY7RUFnQkE7SUFDRSxVQUFBO0VBZEY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5hLm5hdi1saW5rIHtcclxuICAgIC8qY29sb3I6I0FDMjUwODsqL1xyXG4gICAgY29sb3I6I0FDMjUwODtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbmEubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNBQzI1MDg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkIDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgbWluLWhlaWdodDoyMHZoIDtcclxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmUzIDtcclxuICAgIGNvbG9yOiNjMzRmM2U7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcclxuICAgIGNvbG9yOiAjYzM0ZjNlO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xyXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG5cclxuLmZhLXJpZ2h0LXRvLWJyYWNrZXQge1xyXG4gICAgY29sb3I6ICNjMzRmM2U7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4jcG9zdEZlZWRiYWNrIHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbi8qICB2aXNpYmlsaXR5OiBoaWRkZW47Ki9cclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3R0b206MHB4O1xyXG4gIHJpZ2h0OjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLnJlcXVlc3RPayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucmVxdWVzdEtvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnNob3cge1xyXG4gIC8qdmlzaWJpbGl0eTogdmlzaWJsZTsqL1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _garantias_garantias_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./garantias/garantias.component */ 784);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _shared_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth-interceptor.service */ 5931);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.reducers */ 6376);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
            useClass: _shared_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptorService,
            multi: true,
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreModule.forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_5__.appReducers, {
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsModule.forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_5__.EffectsArray),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__.StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
        }),
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _garantias_garantias_component__WEBPACK_IMPORTED_MODULE_2__.GarantiasComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_12__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__.StoreDevtoolsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 6376:
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectsArray": () => (/* binding */ EffectsArray),
/* harmony export */   "appReducers": () => (/* binding */ appReducers)
/* harmony export */ });
/* harmony import */ var _auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/effects/auth.effects */ 3722);
/* harmony import */ var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducers/auth.reducer */ 819);
/* harmony import */ var _usuario_effects_user_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario/effects/user.effects */ 5791);
/* harmony import */ var _usuario_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario/reducers/user.reducer */ 5754);
/* harmony import */ var _favoritos_effects_favoritos_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favoritos/effects/favoritos.effects */ 7297);
/* harmony import */ var _favoritos_reducer_favoritos_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favoritos/reducer/favoritos.reducer */ 490);
/* harmony import */ var _juguete_effects_juguetes_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./juguete/effects/juguetes.effects */ 1731);
/* harmony import */ var _juguete_reducer_juguete_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./juguete/reducer/juguete.reducers */ 6817);
/* harmony import */ var _juguete_admin_effects_juguetes_admin_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./juguete-admin/effects/juguetes-admin.effects */ 7611);
/* harmony import */ var _juguete_admin_reducer_juguete_admin_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./juguete-admin/reducer/juguete-admin.reducers */ 7042);
/* harmony import */ var _experiencias_effects_experiencias_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experiencias/effects/experiencias.effects */ 3697);
/* harmony import */ var _experiencias_reducer_experiencias_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experiencias/reducer/experiencias.reducers */ 9832);
/* harmony import */ var _experiencias_admin_effects_experiencias_admin_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experiencias-admin/effects/experiencias-admin.effects */ 216);
/* harmony import */ var _experiencias_admin_reducer_experiencias_admin_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experiencias-admin/reducer/experiencias-admin.reducers */ 886);














const appReducers = {
    auth: _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authReducer,
    user: _usuario_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__.userReducer,
    favorito: _favoritos_reducer_favoritos_reducer__WEBPACK_IMPORTED_MODULE_5__.favoritoReducer,
    juguete: _juguete_reducer_juguete_reducers__WEBPACK_IMPORTED_MODULE_7__.jugueteReducer,
    jugueteAdmin: _juguete_admin_reducer_juguete_admin_reducers__WEBPACK_IMPORTED_MODULE_9__.jugueteAdminReducer,
    experiencia: _experiencias_reducer_experiencias_reducers__WEBPACK_IMPORTED_MODULE_11__.experienciaReducer,
    experienciaAdmin: _experiencias_admin_reducer_experiencias_admin_reducers__WEBPACK_IMPORTED_MODULE_13__.experienciaAdminReducer
};
const EffectsArray = [
    _auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_0__.AuthEffects,
    _usuario_effects_user_effects__WEBPACK_IMPORTED_MODULE_2__.UserEffects,
    _favoritos_effects_favoritos_effects__WEBPACK_IMPORTED_MODULE_4__.FavoritosEffects,
    _juguete_effects_juguetes_effects__WEBPACK_IMPORTED_MODULE_6__.JuguetesEffects,
    _juguete_admin_effects_juguetes_admin_effects__WEBPACK_IMPORTED_MODULE_8__.JuguetesAdminEffects,
    _experiencias_effects_experiencias_effects__WEBPACK_IMPORTED_MODULE_10__.ExperienciasEffects,
    _experiencias_admin_effects_experiencias_admin_effects__WEBPACK_IMPORTED_MODULE_12__.ExperienciasAdminEffects,
];


/***/ }),

/***/ 4393:
/*!*********************************************!*\
  !*** ./src/app/auth/actions/auth.action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTheAdmin": () => (/* binding */ isTheAdmin),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "loginFailure": () => (/* binding */ loginFailure),
/* harmony export */   "loginSuccess": () => (/* binding */ loginSuccess),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Login page] login', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Login Page] Login Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Login Page] Login Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const isTheAdmin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AUTH] isTheAdmin', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[AUTH] Logout');


/***/ }),

/***/ 2940:
/*!***************************************!*\
  !*** ./src/app/auth/actions/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTheAdmin": () => (/* reexport safe */ _auth_action__WEBPACK_IMPORTED_MODULE_0__.isTheAdmin),
/* harmony export */   "login": () => (/* reexport safe */ _auth_action__WEBPACK_IMPORTED_MODULE_0__.login),
/* harmony export */   "loginFailure": () => (/* reexport safe */ _auth_action__WEBPACK_IMPORTED_MODULE_0__.loginFailure),
/* harmony export */   "loginSuccess": () => (/* reexport safe */ _auth_action__WEBPACK_IMPORTED_MODULE_0__.loginSuccess),
/* harmony export */   "logout": () => (/* reexport safe */ _auth_action__WEBPACK_IMPORTED_MODULE_0__.logout)
/* harmony export */ });
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.action */ 4393);



/***/ }),

/***/ 3722:
/*!**********************************************!*\
  !*** ./src/app/auth/effects/auth.effects.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 2940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);









class AuthEffects {
    constructor(actions$, authService, router, toastService) {
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
        this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.login), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ credentials }) => this.authService.login(credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((userToken) => {
            const credentialsTemp = {
                email: credentials.email,
                password: credentials.password,
                user_id: userToken.user_id,
                access_token: userToken.access_token,
                isAdmin: ((userToken.email == 'gegantoys@gegantoys.com') ? true : false)
            };
            return _actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess({ credentials: credentialsTemp });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_0__.loginFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Login', this.errorResponse);
            if (this.responseOK) {
                this.router.navigateByUrl('juguetes');
            }
        })))));
        this.loginSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.loginFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loginFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.responseOK = false;
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ 819:
/*!***********************************************!*\
  !*** ./src/app/auth/reducers/auth.reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.action */ 4393);


const initialState = {
    auth: { isAdmin: false, user_id: '', access_token: '', email: '', password: '' },
    loading: false,
    loaded: false,
    error: null
};
const _authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__.login, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__.loginSuccess, (state, action) => ({
    ...state,
    auth: action.credentials,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__.loginFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__.isTheAdmin, (state, { isAdmin }) => ({
    ...state,
    isAdmin: isAdmin
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_0__.logout, () => initialState));
function authReducer(state, action) {
    return _authReducer(state, action);
}


/***/ }),

/***/ 6518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AuthService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.headers.set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'api';
    }
    login(auth) {
        // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.post(this.base + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'login', auth);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7051:
/*!**************************************************************************!*\
  !*** ./src/app/experiencias-admin/actions/experiencias-admin.actions.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExperiencia": () => (/* binding */ createExperiencia),
/* harmony export */   "createExperienciaFailure": () => (/* binding */ createExperienciaFailure),
/* harmony export */   "createExperienciaSuccess": () => (/* binding */ createExperienciaSuccess),
/* harmony export */   "deleteExperiencia": () => (/* binding */ deleteExperiencia),
/* harmony export */   "deleteExperienciaFailure": () => (/* binding */ deleteExperienciaFailure),
/* harmony export */   "deleteExperienciaSuccess": () => (/* binding */ deleteExperienciaSuccess),
/* harmony export */   "getAllExperiencias": () => (/* binding */ getAllExperiencias),
/* harmony export */   "getAllExperienciasByUsuario": () => (/* binding */ getAllExperienciasByUsuario),
/* harmony export */   "getAllExperienciasByUsuarioFailure": () => (/* binding */ getAllExperienciasByUsuarioFailure),
/* harmony export */   "getAllExperienciasByUsuarioSuccess": () => (/* binding */ getAllExperienciasByUsuarioSuccess),
/* harmony export */   "getAllExperienciasFailure": () => (/* binding */ getAllExperienciasFailure),
/* harmony export */   "getAllExperienciasSuccess": () => (/* binding */ getAllExperienciasSuccess),
/* harmony export */   "getAllTitulosJuguetes": () => (/* binding */ getAllTitulosJuguetes),
/* harmony export */   "getAllTitulosJuguetesFailure": () => (/* binding */ getAllTitulosJuguetesFailure),
/* harmony export */   "getAllTitulosJuguetesSuccess": () => (/* binding */ getAllTitulosJuguetesSuccess),
/* harmony export */   "getExperienciaByIdAdmin": () => (/* binding */ getExperienciaByIdAdmin),
/* harmony export */   "getExperienciaByIdAdminFailure": () => (/* binding */ getExperienciaByIdAdminFailure),
/* harmony export */   "getExperienciaByIdAdminSuccess": () => (/* binding */ getExperienciaByIdAdminSuccess),
/* harmony export */   "publicarExperiencia": () => (/* binding */ publicarExperiencia),
/* harmony export */   "publicarExperienciaFailure": () => (/* binding */ publicarExperienciaFailure),
/* harmony export */   "publicarExperienciaSuccess": () => (/* binding */ publicarExperienciaSuccess),
/* harmony export */   "resetExperiencia": () => (/* binding */ resetExperiencia),
/* harmony export */   "updateExperiencia": () => (/* binding */ updateExperiencia),
/* harmony export */   "updateExperienciaFailure": () => (/* binding */ updateExperienciaFailure),
/* harmony export */   "updateExperienciaSuccess": () => (/* binding */ updateExperienciaSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getAllExperienciasByUsuario = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET experiencia by user ] getAllExperienciasByUsuario', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllExperienciasByUsuarioSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET experiencia by user success] getAllExperienciasByUsuarioSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllExperienciasByUsuarioFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET experiencia by user failure] getAllExperienciasByUsuarioFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllExperiencias = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin experiencias Page] Get All experiencias', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllExperienciasSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin experiencias Page] Get All experiencias Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllExperienciasFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin experiencias Page] Get All experiencias Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciaByIdAdmin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle experiencia] getExperienciaById', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciaByIdAdminSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle experiencia success] getJugueteByIdSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciaByIdAdminFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle experiencia failure] getExperienciaByIdFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createExperiencia = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE experiencia ] createExperiencia', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createExperienciaSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE experiencia success ] createExperiencia success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createExperienciaFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE experiencia failure ] createExperiencia failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateExperiencia = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UPDATE experiencia ] updateExperiencia', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateExperienciaSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UPDATE experiencia success ] updateExperiencia success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateExperienciaFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UPDATE experiencia failure ] updateExperiencia failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteExperiencia = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE experiencia ] deleteExperiencia', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteExperienciaSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE experiencia success] deleteExperienciaSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteExperienciaFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE experiencia failure] deleteExperienciaFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllTitulosJuguetes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All titulos juguetes page form experiencia] getAllTitulosJuguetes');
const getAllTitulosJuguetesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All titulos juguetes page form experiencia success] getAllTitulosJuguetesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllTitulosJuguetesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All titulos juguetes page form experiencia failure] getAllTitulosJuguetesFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetExperiencia = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Experiencia] ResetExperiencia');
const publicarExperiencia = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PUT publicarExperiencia ] publicarExperiencia', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const publicarExperienciaSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PUT publicarExperienciaSuccess ] publicarExperiencia success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const publicarExperienciaFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PUT publicarExperienciaFailure ] publicarJuguete failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 216:
/*!**************************************************************************!*\
  !*** ./src/app/experiencias-admin/effects/experiencias-admin.effects.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciasAdminEffects": () => (/* binding */ ExperienciasAdminEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/experiencias-admin.actions */ 7051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_experiencia_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/experiencia-admin.service */ 3084);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);









class ExperienciasAdminEffects {
    constructor(actions$, experienciaAdminService, router, toastService) {
        this.actions$ = actions$;
        this.experienciaAdminService = experienciaAdminService;
        this.router = router;
        this.toastService = toastService;
        this.getAllExperienciasByUsuario$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuario), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idUser, numeroPagina }) => this.experienciaAdminService.getAllExperienciasByUsuario(idUser, numeroPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciasResponse) => {
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuarioSuccess({
                experiencias: experienciasResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuarioFailure({ payload: error }));
        })))));
        this.getAllExperienciasByUsuarioFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuarioFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getExperienciaByIdAdmin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdmin), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idExperiencia }) => this.experienciaAdminService.getExperienciaById(idExperiencia).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciaResponse) => {
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdminSuccess({
                experiencia: experienciaResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdminFailure({ payload: error }));
        })))));
        this.getExperienciaByIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdminFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getAllExperiencias$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperiencias), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ numeroPagina }) => this.experienciaAdminService.getAllExperiencias(numeroPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciasResponse) => {
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasSuccess({
                experiencias: experienciasResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasFailure({ payload: error }));
        })))));
        this.getAllExperienciasFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.createExperiencia$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperiencia), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ experiencia }) => this.experienciaAdminService.add(experiencia).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciaCreated) => {
            /*const experienciaTemp: Experiencia = {
                
                id: experienciaCreated.id,
                juguete_id: experienciaCreated.juguete_id,
                user_id: experienciaCreated.user_id,
                fecha_publicacion: experienciaCreated.fecha_publicacion,
                descripcion:experienciaCreated.descripcion,
                imagen_experiencia:experienciaCreated.imagen_experiencia,
                publicado: experienciaCreated.publicado,
                titulo: experienciaCreated.titulo,
                valoracion: experienciaCreated.valoracion
            };*/
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperienciaSuccess({ experiencia: experienciaCreated });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperienciaFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Create Experiencia ', this.errorResponse);
            if (this.responseOK) {
                this.router.navigateByUrl('experiencias-listado');
            }
        })))));
        this.createExperienciaSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperienciaSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.createExperienciaFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperienciaFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.updateExperiencia$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperiencia), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ experiencia }) => this.experienciaAdminService.update(experiencia).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciaCreated) => {
            /*const experienciaTemp: Experiencia = {
                id: experienciaCreated.id,
                juguete_id: experienciaCreated.juguete_id,
                user_id: experienciaCreated.user_id,
                fecha_publicacion: experienciaCreated.fecha_publicacion
            };*/
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperienciaSuccess({ experiencia: experienciaCreated });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperienciaFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Update Experiencia ', this.errorResponse);
            if (this.responseOK) {
                this.router.navigateByUrl('experiencias-listado');
            }
        })))));
        this.updateExperienciaSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperienciaSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.updateExperienciaFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperienciaFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.deleteExperiencia$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperiencia), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idExperiencia }) => this.experienciaAdminService.delete(idExperiencia).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperienciaSuccess({
                idExperiencia: idExperiencia,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperienciaFailure({ payload: error }));
        })))));
        this.deleteExperienciaFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperienciaFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getAllTitulosJuguetes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({}) => this.experienciaAdminService.getAllTitulosJuguetes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((titulosJuguetesResponse) => {
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetesSuccess({
                titulosJuguetes: titulosJuguetesResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetesFailure({ payload: error }));
        })))));
        this.getAllTitulosJuguetesFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetesFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.publicarExperiencia$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperiencia), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idExperiencia, valorCheckbox }) => this.experienciaAdminService.publicarExperiencia(idExperiencia, valorCheckbox).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({ id, publicado }) => {
            return _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperienciaSuccess({
                idExperiencia: id,
                publicado: publicado
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperienciaFailure({ payload: error }));
        })))));
        this.publicarExperienciaFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperienciaFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.responseOK = false;
    }
}
ExperienciasAdminEffects.ɵfac = function ExperienciasAdminEffects_Factory(t) { return new (t || ExperienciasAdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_experiencia_admin_service__WEBPACK_IMPORTED_MODULE_1__.ExperienciaAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ExperienciasAdminEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: ExperienciasAdminEffects, factory: ExperienciasAdminEffects.ɵfac });


/***/ }),

/***/ 886:
/*!***************************************************************************!*\
  !*** ./src/app/experiencias-admin/reducer/experiencias-admin.reducers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "experienciaAdminReducer": () => (/* binding */ experienciaAdminReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/experiencias-admin.actions */ 7051);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ 7503);



const initialState = {
    titulosAllJuguetes: [],
    numeroPagina: 1,
    idExperiencia: '',
    experiencias: [],
    experiencia: {
        id: '', titulo: '', descripcion: '', fecha_publicacion: new Date(), imagen_experiencia: '', valoracion: 0,
        juguete_id: '', publicado: false, user_id: ''
    },
    loading: false,
    loaded: false,
    error: null
};
const _experienciaAdminReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuario, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuarioSuccess, (state, action) => ({
    ...state,
    numeroPagina: (action.experiencias.length > 0) ? state.numeroPagina + 1 : state.numeroPagina,
    experiencias: state.experiencias.concat(action.experiencias),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasByUsuarioFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperiencias, (state) => ({
    ...state,
    experiencia: initialState.experiencia,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasSuccess, (state, action) => ({
    ...state,
    numeroPagina: (action.experiencias.length > 0) ? state.numeroPagina + 1 : state.numeroPagina,
    experiencias: state.experiencias.concat(action.experiencias),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllExperienciasFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdmin, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdminSuccess, (state, action) => ({
    ...state,
    experiencia: action.experiencia,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdminFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperiencia, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperienciaSuccess, (state, action) => ({
    ...state,
    experiencia: action.experiencia,
    numeroPagina: Math.ceil(state.experiencias.length + 1 / _globals__WEBPACK_IMPORTED_MODULE_1__.itemsPorPagina) + 1,
    experiencias: state.experiencias.concat(action.experiencia),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperienciaFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperiencia, (state) => ({
    ...state,
    experiencia: state.experiencia,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperienciaSuccess, (state, action) => ({
    ...state,
    idExperiencia: action.experiencia.id,
    experiencia: initialState.experiencia,
    /*
    experiencias: state.experiencias.map(( item:Experiencia ) => {

      if ( item.id === action.experiencia.id) {
         return {
              ...item,
              titulo: action.experiencia.titulo,
              descripcion: action.experiencia.descripcion,
              imagen_experiencia:action.experiencia.imagen_experiencia,
              valoracion: action.experiencia.valoracion,
              publicado: action.experiencia.publicado,
              fecha_publicacion: action.experiencia.fecha_publicacion,
         }
      } else {
          return item;
      }
  
    }) ,*/
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperienciaFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperiencia, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperienciaSuccess, (state, action) => ({
    ...state,
    numeroPagina: Math.ceil(state.experiencias.length - 1 / _globals__WEBPACK_IMPORTED_MODULE_1__.itemsPorPagina) + 1,
    experiencias: [...state.experiencias.filter((experiencia) => experiencia.id !== action.idExperiencia)],
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteExperienciaFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetes, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetesSuccess, (state, action) => ({
    ...state,
    titulosAllJuguetes: action.titulosJuguetes,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperiencia, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperienciaSuccess, (state, action) => ({
    ...state,
    experiencias: state.experiencias.map((item) => {
        if (item.id === action.idExperiencia.toString()) {
            return {
                ...item,
                publicado: action.publicado,
            };
        }
        else {
            return item;
        }
    }),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarExperienciaFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.resetExperiencia, () => initialState));
function experienciaAdminReducer(state, action) {
    return _experienciaAdminReducer(state, action);
}


/***/ }),

/***/ 3084:
/*!**************************************************************************!*\
  !*** ./src/app/experiencias-admin/services/experiencia-admin.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciaAdminService": () => (/* binding */ ExperienciaAdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ExperienciaAdminService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        //this.headers.set('Access-Control-Allow-Origin','*');
        this.headers.set('content-type', 'multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/api';
    }
    getAllExperiencias(numeroPagina) {
        // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/experiencia/page/' + numeroPagina);
    }
    getAllExperienciasByUsuario(idUsuario, numeroPagina) {
        return this.http.get(this.base + '/experiencia/usuario/page' + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + numeroPagina + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + idUsuario);
        //return this.http.get<Experiencia[]>( this.base +'/experiencias/' + idUsuario);
    }
    getExperienciaById(idExperiencia) {
        // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/experiencia/' + idExperiencia);
    }
    getAllTitulosJuguetes() {
        return this.http.get(this.base + '/juguetes/titulos/');
    }
    add(experiencia) {
        return this.http.post(this.base + '/experiencia', experiencia);
    }
    update(experiencia) {
        //return this.http.post<Experiencia>(this.base + '/experiencia/' + idExperiencia, experiencia );
        return this.http.post(this.base + '/experiencia-update', experiencia);
    }
    delete(idExperiencia) {
        return this.http.delete(this.base + '/experiencia/' + idExperiencia);
    }
    publicarExperiencia(idExperiencia, valorCheckbox) {
        if (valorCheckbox) {
            return this.http.get(this.base + '/experiencia/publicar/' + idExperiencia);
        }
        else {
            return this.http.get(this.base + '/experiencia/nopublicar/' + idExperiencia);
        }
    }
}
ExperienciaAdminService.ɵfac = function ExperienciaAdminService_Factory(t) { return new (t || ExperienciaAdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ExperienciaAdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExperienciaAdminService, factory: ExperienciaAdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2100:
/*!**************************************************************!*\
  !*** ./src/app/experiencias/actions/experiencias.actions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExperienciaById": () => (/* binding */ getExperienciaById),
/* harmony export */   "getExperienciaByIdFailure": () => (/* binding */ getExperienciaByIdFailure),
/* harmony export */   "getExperienciaByIdSuccess": () => (/* binding */ getExperienciaByIdSuccess),
/* harmony export */   "getExperiencias": () => (/* binding */ getExperiencias),
/* harmony export */   "getExperienciasFailure": () => (/* binding */ getExperienciasFailure),
/* harmony export */   "getExperienciasSuccess": () => (/* binding */ getExperienciasSuccess),
/* harmony export */   "resetExperiencia": () => (/* binding */ resetExperiencia),
/* harmony export */   "setIdExperienciaDetalle": () => (/* binding */ setIdExperienciaDetalle)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getExperiencias = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[blog experiencias Page] Get experiencias', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciasSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Blog experiencias Page] Get experiencias Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciasFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Blog experiencias Page] Get experiencias Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciaById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle experiencia] getExperienciaById', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciaByIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle experiencia success] getJugueteByIdSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getExperienciaByIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle experiencia failure] getExperienciaByIdFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setIdExperienciaDetalle = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[SET id exp detalle]', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetExperiencia = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Experiencia] ResetExperiencia');


/***/ }),

/***/ 3697:
/*!**************************************************************!*\
  !*** ./src/app/experiencias/effects/experiencias.effects.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciasEffects": () => (/* binding */ ExperienciasEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/experiencias.actions */ 2100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_experiencia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/experiencia.service */ 229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);









class ExperienciasEffects {
    constructor(actions$, experienciaService, router, toastService) {
        this.actions$ = actions$;
        this.experienciaService = experienciaService;
        this.router = router;
        this.toastService = toastService;
        this.getExperienciaById$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaById), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idExperiencia }) => this.experienciaService.getExperienciaById(idExperiencia).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciaResponse) => {
            return _actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdSuccess({
                experiencia: experienciaResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdFailure({ payload: error }));
        })))));
        this.getExperienciaByIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getExperiencias$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperiencias), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ numeroPagina }) => this.experienciaService.getAllExperiencias(numeroPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((experienciasResponse) => {
            return _actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciasSuccess({
                experiencias: experienciasResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciasFailure({ payload: error }));
        })))));
        this.getExperienciasFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciasFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
    }
}
ExperienciasEffects.ɵfac = function ExperienciasEffects_Factory(t) { return new (t || ExperienciasEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_experiencia_service__WEBPACK_IMPORTED_MODULE_1__.ExperienciaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ExperienciasEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ExperienciasEffects, factory: ExperienciasEffects.ɵfac });


/***/ }),

/***/ 9832:
/*!***************************************************************!*\
  !*** ./src/app/experiencias/reducer/experiencias.reducers.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "experienciaReducer": () => (/* binding */ experienciaReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/experiencias.actions */ 2100);


const initialState = {
    numeroPagina: 1,
    idExperienciaDetalle: '',
    experiencias: [],
    experiencia: {
        id: '', titulo: '', descripcion: '', fecha_publicacion: new Date(), imagen_experiencia: '', valoracion: 0,
        juguete_id: '', publicado: false, user_id: ''
    },
    loading: false,
    loaded: false,
    error: null
};
const _experienciaReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperiencias, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciasSuccess, (state, action) => ({
    ...state,
    numeroPagina: (action.experiencias.length > 0) ? state.numeroPagina + 1 : state.numeroPagina,
    experiencias: state.experiencias.concat(action.experiencias.filter((item) => item.publicado == true)),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciasFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdSuccess, (state, action) => ({
    ...state,
    experiencia: action.experiencia,
    idExperienciaDetalle: action.experiencia.id,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.setIdExperienciaDetalle, (state, { idExperienciaDetalle }) => ({
    ...state,
    idExperienciaDetalle: idExperienciaDetalle,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_experiencias_actions__WEBPACK_IMPORTED_MODULE_0__.resetExperiencia, () => initialState));
function experienciaReducer(state, action) {
    return _experienciaReducer(state, action);
}


/***/ }),

/***/ 229:
/*!**************************************************************!*\
  !*** ./src/app/experiencias/services/experiencia.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciaService": () => (/* binding */ ExperienciaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ExperienciaService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        //this.headers.set('Access-Control-Allow-Origin','*');
        this.headers.set('content-type', 'multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/api';
    }
    getAllExperiencias(numeroPagina) {
        // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/experiencia/page/' + numeroPagina);
    }
    getExperienciaById(idExperiencia) {
        // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/experiencia/' + idExperiencia);
    }
}
ExperienciaService.ɵfac = function ExperienciaService_Factory(t) { return new (t || ExperienciaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ExperienciaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExperienciaService, factory: ExperienciaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7454:
/*!*******************************************************!*\
  !*** ./src/app/favoritos/actions/favoritos.action.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteFavorito": () => (/* binding */ deleteFavorito),
/* harmony export */   "deleteFavoritoFailure": () => (/* binding */ deleteFavoritoFailure),
/* harmony export */   "deleteFavoritoSuccess": () => (/* binding */ deleteFavoritoSuccess),
/* harmony export */   "getAllFavoritosByUser": () => (/* binding */ getAllFavoritosByUser),
/* harmony export */   "getAllFavoritosByUserFailure": () => (/* binding */ getAllFavoritosByUserFailure),
/* harmony export */   "getAllFavoritosByUserSuccess": () => (/* binding */ getAllFavoritosByUserSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getAllFavoritosByUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET ALL favoritos by user] getAllFavoritosByUser', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllFavoritosByUserSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET ALL favoritos by user success] getAllFavoritosByUserSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllFavoritosByUserFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET ALL favoritos by user failure] getAllFavoritosByUserFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFavorito = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE favorito ] deleteFavorito', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFavoritoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE favorito success] deleteFavoritoSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFavoritoFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE favorito failure] deleteFavoritoFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 7297:
/*!********************************************************!*\
  !*** ./src/app/favoritos/effects/favoritos.effects.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosEffects": () => (/* binding */ FavoritosEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/favoritos.action */ 7454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_favoritos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/favoritos.service */ 5484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);









class FavoritosEffects {
    constructor(actions$, favoritosService, router, toastService) {
        this.actions$ = actions$;
        this.favoritosService = favoritosService;
        this.router = router;
        this.toastService = toastService;
        this.getAllFavoritosByUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idUser }) => this.favoritosService.getAllFavoritosByUser(idUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((favoritosResponse) => {
            return _actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUserSuccess({
                favoritos: favoritosResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUserFailure({ payload: error }));
        })))));
        this.getAllFavoritosByUserFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUserFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.deleteFavorito$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavorito), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ idFavorito }) => this.favoritosService.deleteFavorito(idFavorito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            return _actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoSuccess({
                idFavorito: idFavorito,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFailure({ payload: error }));
        })))));
        this.deleteFavoritoFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.responseOK = false;
    }
}
FavoritosEffects.ɵfac = function FavoritosEffects_Factory(t) { return new (t || FavoritosEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_favoritos_service__WEBPACK_IMPORTED_MODULE_1__.FavoritosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
FavoritosEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: FavoritosEffects, factory: FavoritosEffects.ɵfac });


/***/ }),

/***/ 490:
/*!********************************************************!*\
  !*** ./src/app/favoritos/reducer/favoritos.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "favoritoReducer": () => (/* binding */ favoritoReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/favoritos.action */ 7454);


const initialState = {
    idFavorito: '',
    favoritos: new Array(),
    loading: false,
    loaded: false,
    error: null
};
const _favoritoReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUser, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUserSuccess, (state, action) => ({
    ...state,
    favoritos: action.favoritos,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.getAllFavoritosByUserFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavorito, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoSuccess, (state, { idFavorito }) => ({
    ...state,
    favoritos: [...state.favoritos.filter((favorito) => favorito.id !== idFavorito)],
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_favoritos_action__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})));
function favoritoReducer(state, action) {
    return _favoritoReducer(state, action);
}


/***/ }),

/***/ 784:
/*!**************************************************!*\
  !*** ./src/app/garantias/garantias.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GarantiasComponent": () => (/* binding */ GarantiasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class GarantiasComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.fragment.subscribe({
            next: (sectionId) => {
                if (sectionId != null) {
                    this.sectionId = sectionId;
                    this.jumpTo();
                }
            }
        });
    }
    jumpTo() {
        let id = document.getElementById(this.sectionId);
        id.scrollIntoView({ behavior: 'auto' });
    }
}
GarantiasComponent.ɵfac = function GarantiasComponent_Factory(t) { return new (t || GarantiasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
GarantiasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GarantiasComponent, selectors: [["app-garantias"]], decls: 75, vars: 0, consts: [[1, "contenedor-pagina"], ["id", "nosotros", 1, "titulo-pagina"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-12", "mx-auto"], ["role", "presentation", 1, "nav-item", "mx-auto", "w-full", "sm:w-1/3"], ["href", "/garantias#tabgarantias"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "active", "text-center", "py-3"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#AC2508", "viewBox", "0 0 512 512", 1, "mx-auto", "w-24", "h-24"], ["d", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"], [1, "text-2xl", "sm:text-3xl", "2xl:text-5xl", "text-orange", "py-4", "font-thin"], [1, "text-xs", "sm:text-sm", "2xl:text-base", "text-orange"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "text-center", "py-3"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#AC2508", "viewBox", "0 0 576 512", 1, "mx-auto", "w-24", "h-24"], ["d", "M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h32l-18.8 75.1c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"], ["id", "pills-contact-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "text-center", "py-3"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#AC2508", "viewBox", "0 0 320 512", 1, "mx-auto", "w-24", "h-24"], ["d", "M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"], ["id", "tabgarantias", 1, "mx-auto", "w-5/6", "sm:w-2/3", "border-b", "border-orange-electric"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", "tabindex", "0", 1, "tab-pane", "fade", "show", "active", "mb-12"], [1, "text-xl", "sm:text-2xl", "2xl:text-4xl", "text-orange-electric", "my-8", "sm:my-12", "2xl:my-24", "text-center"], [1, "flex", "flex-wrap", "mb-8", "space-between", "justify-center"], [1, "tooltip-one", "m-2", "justify-self-start", "w-fit", "h-fit", "sm:w-1/3", "2xl:w-1/4", "mt-4", "sm:mt-32", "2xl:mt-52", "sm:text-sm", "2xl:text-2xl", "font-thin"], [1, "tooltip-one", "m-2", "justify-self-center", "w-fit", "h-fit", "sm:w-1/3", "2xl:w-1/4", "sm:w-1/4", "mt-4", "sm:text-sm", "2xl:text-2xl", "font-thin"], [1, "tooltip-one", "m-2", "justify-self-end", "w-fit", "h-fit", "sm:w-1/3", "2xl:w-1/6", "2xl:w-1/4", "mt-4", "sm:mt-32", "2xl:mt-48", "sm:text-sm", "2xl:text-2xl", "bg-orange-transparent", "text-orange-electric", "rounded", "font-thin"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "orange", "viewBox", "0 0 320 512", 1, "mx-auto", "w-20", "2xl:w-32", "h-full"], ["d", "M208 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM152 352V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", "tabindex", "0", 1, "tab-pane", "fade", "mb-12"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "orange", "viewBox", "0 0 320 512", 1, "mx-auto", "w-32", "h-full"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", "tabindex", "0", 1, "tab-pane", "fade", "mb-12"]], template: function GarantiasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acerca de nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nuestra web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Conozca la finalidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "de este sitio web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3)(16, "a", 4)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Conozca la finalidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "de este sitio web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 3)(27, "a", 4)(28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Garant\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Conozca la finalidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "de este sitio web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17)(39, "div", 18)(40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nuestra web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20)(43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Nuestro sitio se dedica a promocionar productos de Amazon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " La informaci\u00F3n que proporcionamos sobre los productos es un valor a\u00F1adido. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Es simplemente un escaparate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26)(52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20)(55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Los precios no variar\u00E1n cuando vayas a Amazon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " No ponemos precio porque es absurdo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Ya sabes que Amazon es una gran plataforma de venta online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28)(64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Garant\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20)(67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Los precios no variar\u00E1n cuando vayas a Amazon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " No ponemos precio porque es absurdo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Ya sabes que Amazon es una gran plataforma de venta online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["@charset \"UTF-8\";\n\n\n\n.tooltip-one[_ngcontent-%COMP%] {\n  padding: 18px 14px;\n  background-color: #fff6e3;\n  color: #FF5733;\n  position: relative;\n  border-radius: 5px;\n  text-align: center;\n  filter: drop-shadow(0 3px 5px #ccc);\n  line-height: 1.5;\n}\n.tooltip-one[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -9px;\n  left: 50%;\n  margin-left: -9px;\n  width: 18px;\n  height: 18px;\n  background-color: #fff6e3;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhcmFudGlhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7Ozs7O0NBQUE7QUFNQSw0QkFBQTtBQUVFLGlCQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQURKIiwiZmlsZSI6ImdhcmFudGlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4udG9vbHRpcC1vbmUge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiovXHJcbi8qIHRvb2x0aXAgc2luIHRyaWFuZ3VsaXRvICovXHJcbiAgXHJcbiAgLyogRU1QSUVaQSBBUVXDjSAqL1xyXG4gIFxyXG4gIC50b29sdGlwLW9uZSB7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmUzO1xyXG4gICAgY29sb3I6ICNGRjU3MzM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgM3B4IDVweCAjY2NjKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwLW9uZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtOXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZTM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 7503:
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailAdmin": () => (/* binding */ emailAdmin),
/* harmony export */   "itemsPorPagina": () => (/* binding */ itemsPorPagina),
/* harmony export */   "sep": () => (/* binding */ sep),
/* harmony export */   "server": () => (/* binding */ server)
/* harmony export */ });
const server = "http://localhost:8000";
//export const server = "https://gegantoys.com/backend/public";
const sep = '/';
const emailAdmin = 'gegantoys@gegantoys.com';
const itemsPorPagina = 12;


/***/ }),

/***/ 6942:
/*!****************************************************************!*\
  !*** ./src/app/juguete-admin/actions/juguete-admin.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createJuguete": () => (/* binding */ createJuguete),
/* harmony export */   "createJugueteFailure": () => (/* binding */ createJugueteFailure),
/* harmony export */   "createJugueteSuccess": () => (/* binding */ createJugueteSuccess),
/* harmony export */   "deleteJuguete": () => (/* binding */ deleteJuguete),
/* harmony export */   "deleteJugueteFailure": () => (/* binding */ deleteJugueteFailure),
/* harmony export */   "deleteJugueteSuccess": () => (/* binding */ deleteJugueteSuccess),
/* harmony export */   "getAllCategorias": () => (/* binding */ getAllCategorias),
/* harmony export */   "getAllCategoriasByJugueteId": () => (/* binding */ getAllCategoriasByJugueteId),
/* harmony export */   "getAllCategoriasByJugueteIdFailure": () => (/* binding */ getAllCategoriasByJugueteIdFailure),
/* harmony export */   "getAllCategoriasByJugueteIdSuccess": () => (/* binding */ getAllCategoriasByJugueteIdSuccess),
/* harmony export */   "getAllCategoriasFailure": () => (/* binding */ getAllCategoriasFailure),
/* harmony export */   "getAllCategoriasSuccess": () => (/* binding */ getAllCategoriasSuccess),
/* harmony export */   "getAllJuguetes": () => (/* binding */ getAllJuguetes),
/* harmony export */   "getAllJuguetesFailure": () => (/* binding */ getAllJuguetesFailure),
/* harmony export */   "getAllJuguetesSuccess": () => (/* binding */ getAllJuguetesSuccess),
/* harmony export */   "getJugueteById": () => (/* binding */ getJugueteById),
/* harmony export */   "getJugueteByIdFailure": () => (/* binding */ getJugueteByIdFailure),
/* harmony export */   "getJugueteByIdSuccess": () => (/* binding */ getJugueteByIdSuccess),
/* harmony export */   "publicarJuguete": () => (/* binding */ publicarJuguete),
/* harmony export */   "publicarJugueteFailure": () => (/* binding */ publicarJugueteFailure),
/* harmony export */   "publicarJugueteSuccess": () => (/* binding */ publicarJugueteSuccess),
/* harmony export */   "resetJugueteAdmin": () => (/* binding */ resetJugueteAdmin),
/* harmony export */   "updateJuguete": () => (/* binding */ updateJuguete),
/* harmony export */   "updateJugueteFailure": () => (/* binding */ updateJugueteFailure),
/* harmony export */   "updateJugueteSuccess": () => (/* binding */ updateJugueteSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getAllJuguetes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Listado juguetes admin Page] Get All juguetes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllJuguetesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Listado juguetes admin Page] Get All juguetes Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllJuguetesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Catalogo Page] Get All juguetes  Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJugueteById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle juguete] getJugueteById', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJugueteByIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle juguete success] getJugueteByIdSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJugueteByIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detall juguete failure] getJugueteByIdFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE juguete ] createJuguete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createJugueteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE juguete success] createJugueteSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createJugueteFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE juguete failure] createJugueteFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UPDATE juguete ] updateJuguete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateJugueteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UPDATE juguete success] updateJugueteSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateJugueteFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UPDATE juguete failure] updateJugueteFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE juguete ] deleteJuguete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteJugueteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE juguete success] deleteJugueteSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteJugueteFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE juguete failure] deleteJugueteFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategorias = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All categorias] Get All juguetes');
const getAllCategoriasSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasByJugueteId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All categorias] Get All juguetes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasByJugueteIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasByJugueteIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const publicarJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PUT publicarJuguete ] publicarJuguete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const publicarJugueteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PUT publicarJugueteSuccess ] publicarJuguete success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const publicarJugueteFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[PUT publicarJugueteFailure ] publicarJuguete failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetJugueteAdmin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Juguete] ResetjugueteAdmin');


/***/ }),

/***/ 7611:
/*!*****************************************************************!*\
  !*** ./src/app/juguete-admin/effects/juguetes-admin.effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesAdminEffects": () => (/* binding */ JuguetesAdminEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/juguete-admin.actions */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_juguetes_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/juguetes-admin.service */ 2797);
/* harmony import */ var src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/categorias.service */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);










class JuguetesAdminEffects {
    constructor(actions$, juguetesAdminService, categoriasService, router, toastService) {
        this.actions$ = actions$;
        this.juguetesAdminService = juguetesAdminService;
        this.categoriasService = categoriasService;
        this.router = router;
        this.toastService = toastService;
        this.getAllJuguetes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ numeroPagina }) => this.juguetesAdminService.getAllJuguetes(numeroPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((juguetesResponse) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetesSuccess({
                juguetes: juguetesResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetesFailure({ payload: error }));
        })))));
        this.getAllJuguetesFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetesFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getJugueteById$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteById), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ idJuguete }) => this.juguetesAdminService.getJugueteById(idJuguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((jugueteResponse) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdSuccess({
                juguete: jugueteResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdFailure({ payload: error }));
        })))));
        this.getJugueteByIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.createJuguete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJuguete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ juguete }) => this.juguetesAdminService.add(juguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((jugueteCreated) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJugueteSuccess({ juguete: jugueteCreated });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJugueteFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Create Juguete ', this.errorResponse);
            if (this.responseOK) {
                this.router.navigateByUrl('juguetes-listado');
            }
        })))));
        this.createJugueteSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJugueteSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.createJugueteFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJugueteFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.updateJuguete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJuguete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ juguete }) => this.juguetesAdminService.update(juguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((idJuguete) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJugueteSuccess({ idJuguete: idJuguete });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJugueteFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, ' Update Juguete ', this.errorResponse);
            if (this.responseOK) {
                this.router.navigateByUrl('juguetes-listado');
            }
        })))));
        this.udpateJugueteSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJugueteSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.updateJugueteFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJugueteFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.deleteJuguete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJuguete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ idJuguete }) => this.juguetesAdminService.delete(idJuguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJugueteSuccess({
                idJuguete: idJuguete,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJugueteFailure({ payload: error }));
        })))));
        this.deleteJugueteFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJugueteFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getAllCategorias$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategorias), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({}) => this.categoriasService.getAllCategorias().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((categoriasResponse) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasSuccess({
                categorias: categoriasResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasFailure({ payload: error }));
        })))));
        this.getAllCategoriasFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getAllCategoriaByJugueteId$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ idJuguete }) => this.categoriasService.getAllCategoriasByJugueteId(idJuguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((categoriaResponse) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdSuccess({
                categoria: categoriaResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdFailure({ payload: error }));
        })))));
        this.getAllCategoriaByJugueteIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.publicarJuguete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJuguete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.exhaustMap)(({ idJuguete, valorCheckbox }) => this.juguetesAdminService.publicarJuguete(idJuguete, valorCheckbox).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({ id, publicado }) => {
            return _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJugueteSuccess({
                idJuguete: id,
                publicado: publicado
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJugueteFailure({ payload: error }));
        })))));
        this.publicarJugueteFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJugueteFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.responseOK = false;
    }
}
JuguetesAdminEffects.ɵfac = function JuguetesAdminEffects_Factory(t) { return new (t || JuguetesAdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_services_juguetes_admin_service__WEBPACK_IMPORTED_MODULE_1__.JuguetesAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService)); };
JuguetesAdminEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: JuguetesAdminEffects, factory: JuguetesAdminEffects.ɵfac });


/***/ }),

/***/ 7042:
/*!*****************************************************************!*\
  !*** ./src/app/juguete-admin/reducer/juguete-admin.reducers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "jugueteAdminReducer": () => (/* binding */ jugueteAdminReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/juguete-admin.actions */ 6942);
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/globals */ 7503);



const initialState = {
    categorias: [],
    categoria: {
        id: '', imagen_categoria: '', imagen_subcat1: '', imagen_subcat2: '', nombre_categoria: '', subcategoria1: '', subcategoria2: ''
    },
    numeroPagina: 1,
    idJuguete: 0,
    juguetes: [],
    juguete: {
        id: '', alto: '', ancho: '', largo: '', contra1: '0', contra2: '0', contra3: '0', contra4: '0', contra5: '', contra6: '',
        pro1: '', pro2: '', pro3: '', pro4: '', pro5: '', pro6: '', descripcion: '', titulo: '', edad: 0, fecha_publicacion: new Date(),
        marca: '', material: '', num_votaciones: 0, publicado: false, precio: 0, path_imagen: '',
        categoria: { imagen_categoria: '', imagen_subcat1: '', imagen_subcat2: '', nombre_categoria: '', subcategoria1: '', subcategoria2: '', id: '' },
        puntuacion: 0, imagen1: '', imagen2: '', imagen3: '', imagen4: '', imagen5: '', imagen6: '', imagen7: '', imagen8: ''
    },
    loading: false,
    loaded: false,
    error: null
};
const _jugueteAdminReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetes, (state) => ({
    ...state,
    juguete: initialState.juguete,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetesSuccess, (state, action) => ({
    ...state,
    numeroPagina: (action.juguetes.length > 0) ? state.numeroPagina + 1 : state.numeroPagina,
    juguetes: state.juguetes.concat(action.juguetes),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllJuguetesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdSuccess, (state, action) => ({
    ...state,
    juguete: action.juguete,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJugueteSuccess, (state, action) => ({
    ...state,
    numeroPagina: Math.ceil(state.juguetes.length + 1 / src_app_globals__WEBPACK_IMPORTED_MODULE_1__.itemsPorPagina) + 1,
    juguete: action.juguete,
    juguetes: state.juguetes.concat(action.juguete),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJugueteSuccess, (state, action) => ({
    ...state,
    idJuguete: action.idJuguete,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJugueteSuccess, (state, action) => ({
    ...state,
    numeroPagina: Math.ceil(state.juguetes.length - 1 / src_app_globals__WEBPACK_IMPORTED_MODULE_1__.itemsPorPagina) + 1,
    juguetes: [...state.juguetes.filter((juguete) => juguete.id !== action.idJuguete)],
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.deleteJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategorias, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasSuccess, (state, action) => ({
    ...state,
    categorias: action.categorias,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdSuccess, (state, action) => ({
    ...state,
    categoria: action.categoria,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJugueteSuccess, (state, action) => ({
    ...state,
    juguetes: state.juguetes.map((item) => {
        if (item.id === action.idJuguete.toString()) {
            return {
                ...item,
                publicado: action.publicado,
            };
        }
        else {
            return item;
        }
    }),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.publicarJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_juguete_admin_actions__WEBPACK_IMPORTED_MODULE_0__.resetJugueteAdmin, () => initialState));
function jugueteAdminReducer(state, action) {
    return _jugueteAdminReducer(state, action);
}


/***/ }),

/***/ 2797:
/*!******************************************************************!*\
  !*** ./src/app/juguete-admin/services/juguetes-admin.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesAdminService": () => (/* binding */ JuguetesAdminService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class JuguetesAdminService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        this.headers.set('content-type', 'multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/api';
    }
    getAllJuguetes(numeroPagina) {
        return this.http.get(this.base + '/juguetes/page/' + numeroPagina);
    }
    getJugueteById(identifier) {
        // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/juguete/' + identifier);
    }
    add(juguete) {
        return this.http.post(this.base + '/juguete', juguete);
    }
    update(juguete) {
        return this.http.post(this.base + '/juguete-update', juguete);
    }
    delete(idJuguete) {
        return this.http.delete(this.base + '/juguete/' + idJuguete);
    }
    publicarJuguete(idJuguete, valorCheckbox) {
        if (valorCheckbox) {
            return this.http.get(this.base + '/juguete/publicar/' + idJuguete);
        }
        else {
            return this.http.get(this.base + '/juguete/nopublicar/' + idJuguete);
        }
    }
}
JuguetesAdminService.ɵfac = function JuguetesAdminService_Factory(t) { return new (t || JuguetesAdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
JuguetesAdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JuguetesAdminService, factory: JuguetesAdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3757:
/*!****************************************************!*\
  !*** ./src/app/juguete/actions/juguete.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategoriaToBreadCrumbs": () => (/* binding */ addCategoriaToBreadCrumbs),
/* harmony export */   "createFavorito": () => (/* binding */ createFavorito),
/* harmony export */   "createFavoritoFailure": () => (/* binding */ createFavoritoFailure),
/* harmony export */   "createFavoritoSuccess": () => (/* binding */ createFavoritoSuccess),
/* harmony export */   "deleteCategoriaToBreadCrumbs": () => (/* binding */ deleteCategoriaToBreadCrumbs),
/* harmony export */   "deleteFavoritoFromDetalleJuguete": () => (/* binding */ deleteFavoritoFromDetalleJuguete),
/* harmony export */   "deleteFavoritoFromDetalleJugueteFailure": () => (/* binding */ deleteFavoritoFromDetalleJugueteFailure),
/* harmony export */   "deleteFavoritoFromDetalleJugueteSuccess": () => (/* binding */ deleteFavoritoFromDetalleJugueteSuccess),
/* harmony export */   "getAllCategorias": () => (/* binding */ getAllCategorias),
/* harmony export */   "getAllCategoriasByJugueteId": () => (/* binding */ getAllCategoriasByJugueteId),
/* harmony export */   "getAllCategoriasByJugueteIdFailure": () => (/* binding */ getAllCategoriasByJugueteIdFailure),
/* harmony export */   "getAllCategoriasByJugueteIdSuccess": () => (/* binding */ getAllCategoriasByJugueteIdSuccess),
/* harmony export */   "getAllCategoriasFailure": () => (/* binding */ getAllCategoriasFailure),
/* harmony export */   "getAllCategoriasSuccess": () => (/* binding */ getAllCategoriasSuccess),
/* harmony export */   "getFavoritoByUserAndIdJuguete": () => (/* binding */ getFavoritoByUserAndIdJuguete),
/* harmony export */   "getFavoritoByUserAndIdJugueteFailure": () => (/* binding */ getFavoritoByUserAndIdJugueteFailure),
/* harmony export */   "getFavoritoByUserAndIdJugueteSuccess": () => (/* binding */ getFavoritoByUserAndIdJugueteSuccess),
/* harmony export */   "getJugueteById": () => (/* binding */ getJugueteById),
/* harmony export */   "getJugueteByIdFailure": () => (/* binding */ getJugueteByIdFailure),
/* harmony export */   "getJugueteByIdSuccess": () => (/* binding */ getJugueteByIdSuccess),
/* harmony export */   "getJuguetes": () => (/* binding */ getJuguetes),
/* harmony export */   "getJuguetesFailure": () => (/* binding */ getJuguetesFailure),
/* harmony export */   "getJuguetesSuccess": () => (/* binding */ getJuguetesSuccess),
/* harmony export */   "resetJuguete": () => (/* binding */ resetJuguete),
/* harmony export */   "setCategoriaSeleccionada": () => (/* binding */ setCategoriaSeleccionada),
/* harmony export */   "setTipoConsultaCatalogo": () => (/* binding */ setTipoConsultaCatalogo)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const createFavorito = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE favorito ] createFavorito', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createFavoritoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE favorito success] createFavoritoSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createFavoritoFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CREATE favorito failure] createFavoritoFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getFavoritoByUserAndIdJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET favorito by user and id juguete] getFavoritoByUserAndIdJuguete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getFavoritoByUserAndIdJugueteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET favorito by user and id juguete success] getFavoritoByUserAndIdJugueteSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getFavoritoByUserAndIdJugueteFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET favorito by user and id juguete failure] getFavoritoByUserAndIdJugueteFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFavoritoFromDetalleJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE favorito ] deleteFavorito', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFavoritoFromDetalleJugueteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE favorito success] deleteFavoritoSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteFavoritoFromDetalleJugueteFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DELETE favorito failure] deleteFavoritoFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setTipoConsultaCatalogo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Catalogo Page] set tipo consulta catalogo', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJuguetes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Catalogo Page] Get juguetes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJuguetesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Catalogo Page] Get juguetes Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJuguetesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Catalogo Page] Get juguetes Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJugueteById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle juguete] getJugueteById', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJugueteByIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detalle juguete success] getJugueteByIdSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getJugueteByIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET page detall juguete failure] getJugueteByIdFailure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategorias = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All categorias] Get All juguetes');
const getAllCategoriasSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasByJugueteId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GET All categorias] Get All juguetes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasByJugueteIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAllCategoriasByJugueteIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Get all categorias] Get All Categorias Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addCategoriaToBreadCrumbs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('ADD categoria to breadcrumbs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteCategoriaToBreadCrumbs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('DELETE categoria to breadcrumbs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCategoriaSeleccionada = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('SET categoria seleccionada', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetJuguete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Juguete] Resetjuguete');


/***/ }),

/***/ 1731:
/*!*****************************************************!*\
  !*** ./src/app/juguete/effects/juguetes.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesEffects": () => (/* binding */ JuguetesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/juguete.actions */ 3757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_favoritos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/favoritos.service */ 5484);
/* harmony import */ var _services_juguetes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/juguetes.service */ 5933);
/* harmony import */ var src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/categorias.service */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);











class JuguetesEffects {
    constructor(actions$, favoritosService, juguetesService, categoriasService, router, toastService) {
        this.actions$ = actions$;
        this.favoritosService = favoritosService;
        this.juguetesService = juguetesService;
        this.categoriasService = categoriasService;
        this.router = router;
        this.toastService = toastService;
        this.getFavoritoByUserAndIdJuguete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJuguete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({ idJuguete, idUser }) => this.favoritosService.getFavoritoByUserAndIdJuguete(idJuguete, idUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((idFavoritoResponse) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJugueteSuccess({
                idFavorito: idFavoritoResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJugueteFailure({ payload: error }));
        })))));
        this.getFavoritoByUserAndIdJugueteFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJugueteFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.createFavorito$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavorito), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({ favorito }) => this.favoritosService.createFavorito(favorito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((idFavorito) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavoritoSuccess({ idFavorito: idFavorito });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavoritoFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Create favorito ', this.errorResponse);
        })))));
        this.createFavoritoSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavoritoSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.createFavoritoFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavoritoFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.deleteFavoritoFromDetalleJuguete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJuguete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({ idFavorito }) => this.favoritosService.deleteFavorito(idFavorito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((idFavorito) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJugueteSuccess({
                idFavorito: idFavorito,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJugueteFailure({ payload: error }));
        })))));
        this.deleteFavoritoFromDetalleJugueteFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJugueteFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getJuguetes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({ literalABuscar, isBusquedaBuscador, isBusquedaCategoria, numeroPagina }) => this.juguetesService.getJuguetes(literalABuscar, isBusquedaCategoria, isBusquedaBuscador, numeroPagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((juguetesResponse) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetesSuccess({
                juguetes: juguetesResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetesFailure({ payload: error }));
        })))));
        this.getJuguetesFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetesFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getJugueteById$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteById), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({ idJuguete }) => this.juguetesService.getJugueteById(idJuguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((jugueteResponse) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdSuccess({
                juguete: jugueteResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdFailure({ payload: error }));
        })))));
        this.getJugueteByIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getAllCategorias$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategorias), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({}) => this.categoriasService.getAllCategorias().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((categoriasResponse) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasSuccess({
                categorias: categoriasResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasFailure({ payload: error }));
        })))));
        this.getAllCategoriasFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getAllCategoriaByJugueteId$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.exhaustMap)(({ idJuguete }) => this.categoriasService.getAllCategoriasByJugueteId(idJuguete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((categoriaResponse) => {
            return _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdSuccess({
                categoria: categoriaResponse,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdFailure({ payload: error }));
        })))));
        this.getAllCategoriaByJugueteIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.responseOK = false;
    }
}
JuguetesEffects.ɵfac = function JuguetesEffects_Factory(t) { return new (t || JuguetesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_services_favoritos_service__WEBPACK_IMPORTED_MODULE_1__.FavoritosService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_juguetes_service__WEBPACK_IMPORTED_MODULE_2__.JuguetesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_shared_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService)); };
JuguetesEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: JuguetesEffects, factory: JuguetesEffects.ɵfac });


/***/ }),

/***/ 6817:
/*!*****************************************************!*\
  !*** ./src/app/juguete/reducer/juguete.reducers.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "jugueteReducer": () => (/* binding */ jugueteReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/juguete.actions */ 3757);


const initialState = {
    categorias: [],
    categoriaSeleccionada: 'Categorías',
    breadcrumbs: ['Categorías'],
    categoria: {
        id: '', imagen_categoria: '', imagen_subcat1: '', imagen_subcat2: '', nombre_categoria: '', subcategoria1: '', subcategoria2: ''
    },
    numeroPagina: 1,
    isFavorito: false,
    isBusquedaBuscador: false,
    isBusquedaCategoria: false,
    literalABuscar: '',
    idFavorito: '',
    juguetes: [],
    juguete: {
        id: '', alto: '', ancho: '', largo: '', contra1: '0', contra2: '0', contra3: '0', contra4: '0', contra5: '', contra6: '',
        pro1: '', pro2: '', pro3: '', pro4: '', pro5: '', pro6: '', descripcion: '', titulo: '', edad: 0, fecha_publicacion: new Date(),
        marca: '', material: '', num_votaciones: 0, publicado: false, precio: 0, path_imagen: '',
        categoria: { imagen_categoria: '', imagen_subcat1: '', imagen_subcat2: '', nombre_categoria: '', subcategoria1: '', subcategoria2: '', id: '' },
        puntuacion: 0, imagen1: '', imagen2: '', imagen3: '', imagen4: '', imagen5: '', imagen6: '', imagen7: '', imagen8: ''
    },
    loading: false,
    loaded: false,
    error: null
};
const _jugueteReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavorito, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavoritoSuccess, (state, action) => ({
    ...state,
    idFavorito: action.idFavorito,
    isFavorito: (Number.parseInt(action.idFavorito) > 0) ? true : false,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.createFavoritoFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJugueteSuccess, (state, action) => ({
    ...state,
    idFavorito: action.idFavorito,
    isFavorito: (Number.parseInt(action.idFavorito) > 0) ? true : false,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getFavoritoByUserAndIdJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJuguete, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJugueteSuccess, (state, action) => ({
    ...state,
    idFavorito: action.idFavorito,
    isFavorito: false,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteFavoritoFromDetalleJugueteFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.setTipoConsultaCatalogo, (state, action) => ({
    ...state,
    isBusquedaBuscador: action.isBusquedaBuscador,
    isBusquedaCategoria: action.isBusquedaCategoria,
    literalABuscar: action.literalABuscar,
    numeroPagina: 1,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetes, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetesSuccess, (state, action) => ({
    ...state,
    numeroPagina: (action.juguetes.length > 0) ? state.numeroPagina + 1 : state.numeroPagina,
    juguetes: state.juguetes.concat(action.juguetes.filter((item) => item.publicado == true)),
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJuguetesFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteById, (state) => ({
    ...state,
    idFavorito: '',
    isFavorito: false,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdSuccess, (state, action) => ({
    ...state,
    juguete: action.juguete,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getJugueteByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategorias, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasSuccess, (state, action) => ({
    ...state,
    categorias: action.categorias,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteId, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdSuccess, (state, action) => ({
    ...state,
    categoria: action.categoria,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.getAllCategoriasByJugueteIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.addCategoriaToBreadCrumbs, (state, { categoria }) => ({
    ...state,
    breadcrumbs: state.breadcrumbs.concat(categoria),
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.deleteCategoriaToBreadCrumbs, (state, { indexCategoriaEnBreadCrumb }) => ({
    ...state,
    breadcrumbs: [...state.breadcrumbs.slice(0, indexCategoriaEnBreadCrumb + 1)],
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.setCategoriaSeleccionada, (state, { categoriaSeleccionada }) => ({
    ...state,
    categoriaSeleccionada: categoriaSeleccionada,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_juguete_actions__WEBPACK_IMPORTED_MODULE_0__.resetJuguete, (state) => ({
    ...state,
    juguetes: [],
})));
function jugueteReducer(state, action) {
    return _jugueteReducer(state, action);
}


/***/ }),

/***/ 5933:
/*!******************************************************!*\
  !*** ./src/app/juguete/services/juguetes.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesService": () => (/* binding */ JuguetesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class JuguetesService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        this.headers.set('content-type', 'multipart/form-data; charset=utf-8').set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/api';
    }
    getJuguetes(literalAbuscar, isBusquedaPorCategoria, isBusquedaPorBuscador, numeroPagina) {
        this.params.set("literalAbuscar", literalAbuscar);
        if (isBusquedaPorBuscador) {
            //return this.http.get<DataPagination>( this.base +'/juguetes/page/2', { headers: this.headers }).pipe(map((dataPagination:DataPagination) => { return dataPagination.data }));
            return this.http.get(this.base + '/juguetes/busqueda/page/' + numeroPagina + '/' + literalAbuscar);
        }
        else if (isBusquedaPorCategoria) {
            //return this.http.get<DataPagination>( this.base +'/juguetes/page/2', { headers: this.headers }).pipe(map((dataPagination:DataPagination) => { return dataPagination.data }));
            return this.http.get(this.base + '/juguetes/categoria/page/' + numeroPagina + '/' + literalAbuscar);
        }
        else {
            //return this.http.get<DataPagination>( this.base +'/juguetes/page/2', { headers: this.headers }).pipe(map((dataPagination:DataPagination) => { return dataPagination.data }));
            return this.http.get(this.base + '/juguetes/page/' + numeroPagina);
        }
    }
    getJugueteById(identifier) {
        // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/juguete/' + identifier);
    }
}
JuguetesService.ɵfac = function JuguetesService_Factory(t) { return new (t || JuguetesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
JuguetesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JuguetesService, factory: JuguetesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5931:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/auth-interceptor.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);



class AuthInterceptorService {
    constructor(store) {
        this.store = store;
        this.access_token = '';
    }
    intercept(req, next) {
        this.store.select('auth').subscribe({
            next: (authState) => {
                this.access_token = authState.auth.access_token;
            }
        });
        //  null o '' ==> devuelve  ''.      
        console.log("access token: ", this.access_token);
        if (this.access_token) {
            req = req.clone({
                setHeaders: {
                    //Comentamos estas linea para no tener restricciones a la hora
                    //de enviar contenido ya qeu tb enviamos **FormsData**  y no solo json
                    //'Content-Type': 'application/json;charset=utf-8',
                    //'Content-Type': 'multipart/form-data; boundary=something',
                    //'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.access_token}`,
                },
            });
        }
        return next.handle(req);
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5873:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categorias.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasService": () => (/* binding */ CategoriasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class CategoriasService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.headers.set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/api';
    }
    getAllCategorias() {
        //return this.http.get<data>( '/categorias/').pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/categorias');
    }
    getAllCategoriasByJugueteId(identifier) {
        // return this.http.get<data>( '/categoria/' + identifier).pipe(map((data) => { return data.data }));
        return this.http.get('/categoria/' + identifier);
    }
}
CategoriasService.ɵfac = function CategoriasService_Factory(t) { return new (t || CategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CategoriasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoriasService, factory: CategoriasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5484:
/*!******************************************************!*\
  !*** ./src/app/shared/services/favoritos.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritosService": () => (/* binding */ FavoritosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class FavoritosService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.headers.set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/api';
    }
    getAllFavoritosByUser(idUsuario) {
        // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/favoritos/' + idUsuario);
    }
    getFavoritoByUserAndIdJuguete(jugueteId, userId) {
        // return this.http.get<data>( this.base +'/juguetes', { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.get(this.base + '/favoritos/' + jugueteId + '/' + userId);
    }
    createFavorito(favorito) {
        return this.http.post(this.base + '/favoritos', favorito);
    }
    deleteFavorito(idFavorito) {
        return this.http.delete(this.base + '/favoritos/' + idFavorito);
    }
}
FavoritosService.ɵfac = function FavoritosService_Factory(t) { return new (t || FavoritosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
FavoritosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FavoritosService, factory: FavoritosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ToastService {
    constructor() { }
    managementToast(validRequest, actionPerformed, error) {
        let toastMsg = document.getElementById('postFeedback');
        if (toastMsg) {
            if (validRequest) {
                toastMsg.className = ' show requestOk ';
                toastMsg.textContent = actionPerformed + 'Correcto';
            }
            else {
                toastMsg.className = ' show requestKo ';
                toastMsg.textContent = actionPerformed + 'Erróneo';
            }
            toastMsg.style.display = 'inline-block';
            (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(3000).subscribe({
                next: (value) => {
                    if (value == 0) {
                        let toastMsg = document.getElementById('postFeedback');
                        toastMsg.style.display = 'none';
                    }
                }
            });
        }
    }
    errorLog(error) {
        console.error('path:', error.path);
        console.error('timestamp:', error.timestamp);
        console.error('message:', error.message);
        console.error('messageDetail:', error.messageDetail);
        console.error('statusCode:', error.statusCode);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5032:
/*!******************************************!*\
  !*** ./src/app/usuario/actions/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserById": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.getUserById),
/* harmony export */   "getUserByIdFailure": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.getUserByIdFailure),
/* harmony export */   "getUserByIdSuccess": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.getUserByIdSuccess),
/* harmony export */   "register": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.register),
/* harmony export */   "registerFailure": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.registerFailure),
/* harmony export */   "registerSuccess": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.registerSuccess),
/* harmony export */   "updateUser": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.updateUser),
/* harmony export */   "updateUserFailure": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.updateUserFailure),
/* harmony export */   "updateUserSuccess": () => (/* reexport safe */ _user_action__WEBPACK_IMPORTED_MODULE_0__.updateUserSuccess)
/* harmony export */ });
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.action */ 2438);



/***/ }),

/***/ 2438:
/*!************************************************!*\
  !*** ./src/app/usuario/actions/user.action.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserById": () => (/* binding */ getUserById),
/* harmony export */   "getUserByIdFailure": () => (/* binding */ getUserByIdFailure),
/* harmony export */   "getUserByIdSuccess": () => (/* binding */ getUserByIdSuccess),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "registerFailure": () => (/* binding */ registerFailure),
/* harmony export */   "registerSuccess": () => (/* binding */ registerSuccess),
/* harmony export */   "updateUser": () => (/* binding */ updateUser),
/* harmony export */   "updateUserFailure": () => (/* binding */ updateUserFailure),
/* harmony export */   "updateUserSuccess": () => (/* binding */ updateUserSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const register = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Register page] register new user', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const registerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Register page] Register new user Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const registerFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Register Page] Register new user Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] Update User', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateUserSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] Update User Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateUserFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] Update User Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getUserById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] Get user by ID', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getUserByIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] Get user by ID Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getUserByIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] Get user by ID Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 5791:
/*!*************************************************!*\
  !*** ./src/app/usuario/effects/user.effects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": () => (/* binding */ UserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ 5032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario.service */ 3038);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 1443);









class UserEffects {
    constructor(actions$, usuarioService, router, toastService) {
        this.actions$ = actions$;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toastService = toastService;
        this.register$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.register), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ user }) => this.usuarioService.register(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((userTemp) => {
            return _actions__WEBPACK_IMPORTED_MODULE_0__.registerSuccess({ user: userTemp });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_0__.registerFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Register', this.errorResponse);
            if (this.responseOK) {
                this.router.navigateByUrl('juguetes');
            }
        })))));
        this.registerSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.registerSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.registerFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.registerFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.updateUser$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ userId, user }) => this.usuarioService.updateUser(userId, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => {
            return _actions__WEBPACK_IMPORTED_MODULE_0__.updateUserSuccess({
                userId: userId,
                user: user,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateUserFailure({ payload: error }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            this.toastService.managementToast(this.responseOK, 'Perfil', this.errorResponse);
        })))));
        this.updateUserSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateUserSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.responseOK = true;
        })), { dispatch: false });
        this.updateUserFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.updateUserFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.getUserById$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.getUserById), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.exhaustMap)(({ userId }) => this.usuarioService.getUserById(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => {
            return _actions__WEBPACK_IMPORTED_MODULE_0__.getUserByIdSuccess({
                userId: userId,
                user: user,
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_actions__WEBPACK_IMPORTED_MODULE_0__.getUserByIdFailure({ payload: error }));
        })))));
        this.getUserByIdFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.getUserByIdFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((error) => {
            this.responseOK = false;
            this.errorResponse = error.payload.error;
            this.toastService.errorLog(error.payload.error);
        })), { dispatch: false });
        this.responseOK = false;
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
UserEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ 5754:
/*!**************************************************!*\
  !*** ./src/app/usuario/reducers/user.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "userReducer": () => (/* binding */ userReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.action */ 2438);


const initialState = {
    user: { access_token: '', email: '', apellidos: '', birth_date: new Date(), id: '', newPassword: '', newsletter: false, nombre: '', password: '' },
    loading: false,
    loaded: false,
    error: null,
};
const _userReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.register, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.registerSuccess, (state, action) => ({
    ...state,
    user: action.user,
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.registerFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.updateUser, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.updateUserSuccess, (state, action) => ({
    ...state,
    user: {
        ...state.user,
        nombre: action.user.nombre,
        apellidos: action.user.apellidos,
        birth_date: action.user.birth_date,
        email: action.user.email,
        newsletter: action.user.newsletter
    },
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.updateUserFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.getUserById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.getUserByIdSuccess, (state, action) => ({
    ...state,
    user: {
        ...state.user,
        id: action.user.id,
        nombre: action.user.nombre,
        apellidos: action.user.apellidos,
        birth_date: action.user.birth_date,
        email: action.user.email,
        newsletter: action.user.newsletter
    },
    loading: false,
    loaded: true,
    error: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_action__WEBPACK_IMPORTED_MODULE_0__.getUserByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
})));
function userReducer(state, action) {
    return _userReducer(state, action);
}


/***/ }),

/***/ 3038:
/*!*****************************************************!*\
  !*** ./src/app/usuario/services/usuario.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ 7503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class UsuarioService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.headers.set('Access-Control-Allow-Origin', '*');
        this.base = _globals__WEBPACK_IMPORTED_MODULE_0__.server + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'api';
    }
    register(usuario) {
        // return this.http.get<data>( this.base + '/juguete' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
        return this.http.post(this.base + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'register', usuario);
    }
    getUserById(idUser) {
        return this.http.get(this.base + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'sesion' + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + idUser);
    }
    updateUser(usuarioId, usuario) {
        return this.http.put(this.base + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + 'sesion' + _globals__WEBPACK_IMPORTED_MODULE_0__.sep + usuarioId, usuario);
    }
    deleteUser(usuarioId) {
        return this.http.delete(this.base + '/sesion/' + usuarioId);
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UsuarioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map