"use strict";
(self["webpackChunkgegantoys"] = self["webpackChunkgegantoys"] || []).push([["src_app_experiencias-admin_modules_experiencias-admin_module_ts"],{

/***/ 9276:
/*!**********************************************************************************************!*\
  !*** ./src/app/experiencias-admin/components/experiencia-form/experiencia-form.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciaFormComponent": () => (/* binding */ ExperienciaFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/experiencias-admin.actions */ 7051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/file-upload/file-upload.component */ 7082);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);













function ExperienciaFormComponent_form_9_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jugueteComprado_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", jugueteComprado_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](jugueteComprado_r7.titulo);
} }
function ExperienciaFormComponent_form_9_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " T\u00EDtulo del juguete es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExperienciaFormComponent_form_9_div_8_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.juguetesTitulos.errors.required);
} }
function ExperienciaFormComponent_form_9_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " T\u00EDtulo experiencia es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " T\u00EDtulo experiencia solamente puede ser de 255 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExperienciaFormComponent_form_9_div_15_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaFormComponent_form_9_div_15_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.titulo.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.titulo.errors.maxlength);
} }
function ExperienciaFormComponent_form_9_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La valoraci\u00F3n es obligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La valoraci\u00F3n no puede ser superior a 10. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La valoraci\u00F3n no puede ser inferior a 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExperienciaFormComponent_form_9_div_22_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaFormComponent_form_9_div_22_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ExperienciaFormComponent_form_9_div_22_div_3_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valoracion.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valoracion.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.valoracion.errors.min);
} }
function ExperienciaFormComponent_form_9_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La descripci\u00F3n es obligatoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La descripci\u00F3n no puede ser superior a 1000 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExperienciaFormComponent_form_9_div_30_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaFormComponent_form_9_div_30_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.descripcion.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.descripcion.errors.maxlength);
} }
function ExperienciaFormComponent_form_9_div_35_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Indica si vas a publicar o no la experiencia. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaFormComponent_form_9_div_35_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExperienciaFormComponent_form_9_div_35_div_4_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.descripcion.errors.required);
} }
function ExperienciaFormComponent_form_9_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Publicar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ExperienciaFormComponent_form_9_div_35_div_4_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r6.publicado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.descripcion.errors && ctx_r6.descripcion.touched);
} }
function ExperienciaFormComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ExperienciaFormComponent_form_9_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.saveExperiencia()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9)(2, "mat-form-field", 10)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Selecciona el juguete que compraste:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ExperienciaFormComponent_form_9_mat_option_6_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ExperienciaFormComponent_form_9_div_8_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14)(10, "mat-form-field", 10)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "T\u00EDtulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ExperienciaFormComponent_form_9_div_15_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "mat-form-field", 17)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Valora tu experiencias del 1 al 10:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ExperienciaFormComponent_form_9_div_22_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "mat-form-field", 10)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ExperienciaFormComponent_form_9_Template_textarea_keyup_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.wordCounter()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ExperienciaFormComponent_form_9_div_30_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 21)(34, "app-file-upload", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("fileSelected", function ExperienciaFormComponent_form_9_Template_app_file_upload_fileSelected_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.imagenCargada($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ExperienciaFormComponent_form_9_div_35_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 21)(37, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Guardar Experiencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.experienciaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.juguetesTitulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.juguetesCompradosLista);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.juguetesTitulos.errors && ctx_r0.juguetesTitulos.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.titulo.errors && ctx_r0.titulo.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.valoracion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.valoracion.errors && ctx_r0.valoracion.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.descripcion.errors && ctx_r0.descripcion.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.remainingChars, " M\u00E1ximo de caracteres... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fileName", ctx_r0.experiencia_imagen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.experienciaForm.invalid);
} }
class ExperienciaFormComponent {
    constructor(activatedRoute, formBuilder, router, store) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.remainingChars = 1000;
        this.loaded = false;
        this.experiencia_imagen = '';
        this.envioFormDataExperiencia = new FormData();
        this.experienciaId = this.activatedRoute.snapshot.paramMap.get('id') || '';
        this.isUpdateMode = (this.experienciaId) ? true : false;
        this.titulo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]);
        this.descripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(1000)]);
        this.publicado = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
        this.juguetesTitulos = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
        this.valoracion = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]);
        //this.fechaPublicacion = new FormControl(new Date(),[ Validators.required ]);
        this.loadTitulosJuguetesComprados();
        this.experienciaForm = this.formBuilder.group({
            titulo: this.titulo,
            descripcion: this.descripcion,
            juguetesTitulos: this.juguetesCompradosLista,
            publicado: this.publicado,
            valoracion: this.valoracion,
        });
        this.store.select('auth').subscribe({
            next: (authState) => {
                this.userId = Number.parseInt(authState.auth.user_id);
                this.isAdmin = authState.auth.isAdmin;
            }
        });
        this.store.select('experienciaAdmin').subscribe({
            next: (experienciaAdminState) => {
                this.juguetesCompradosLista = experienciaAdminState.titulosAllJuguetes;
                this.experiencia = experienciaAdminState.experiencia;
                this.titulo.setValue(this.experiencia.titulo);
                this.descripcion.setValue(this.experiencia.descripcion);
                this.publicado.setValue(this.experiencia.publicado);
                this.juguetesTitulos.setValue(this.experiencia.juguete_id);
                this.valoracion.setValue(this.experiencia.valoracion);
                //el valor de esta variable se la pasamos al componente hijo de file-upload
                this.experiencia_imagen = this.experiencia.imagen_experiencia;
                //this.fechaPublicacion.setValue(formatDate(experiencia.fecha_publicacion, 'yyyy-MM-dd' , 'en' ));
                this.experienciaForm = this.formBuilder.group({
                    titulo: this.titulo,
                    descripcion: this.descripcion,
                    juguetesTitulos: this.juguetesTitulos,
                    publicado: this.publicado,
                    valoracion: this.valoracion
                });
            }
        });
    }
    loadTitulosJuguetesComprados() {
        this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getAllTitulosJuguetes());
    }
    ngOnInit() {
        if (this.isUpdateMode) {
            this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.getExperienciaByIdAdmin({ idExperiencia: this.experienciaId }));
        }
    }
    updateExperiencia() {
        this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.updateExperiencia({ experiencia: this.envioFormDataExperiencia }));
    }
    addExperiencia() {
        this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createExperiencia({ experiencia: this.envioFormDataExperiencia }));
    }
    saveExperiencia() {
        //preparamos el formdata para enviar al backend
        if (this.isUpdateMode) {
            this.envioFormDataExperiencia.append("id", this.experienciaId || '');
        }
        this.envioFormDataExperiencia.append("titulo", this.titulo.value);
        this.envioFormDataExperiencia.append("descripcion", this.descripcion.value);
        this.envioFormDataExperiencia.append("user_id", this.userId.toString());
        this.envioFormDataExperiencia.append("juguete_id", this.juguetesTitulos.value);
        this.envioFormDataExperiencia.append("publicado", (this.publicado.value ? '1' : '0'));
        this.envioFormDataExperiencia.append("valoracion", this.valoracion.value.toString());
        this.envioFormDataExperiencia.append("fecha_publicacion", (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(), 'yyyy-MM-dd', 'en'));
        this.envioFormDataExperiencia.append("imagen_experiencia", this.experiencia_imagen);
        if (this.isUpdateMode) {
            this.updateExperiencia();
        }
        else {
            this.addExperiencia();
        }
    }
    imagenCargada(imagenFile) {
        if (imagenFile) {
            //Empezamos a preparar el formdata de envio
            this.envioFormDataExperiencia.append("thumbnail", imagenFile);
            //this.envioFormDataExperiencia.append("filename", imagenFile.name);
            //el valor de esta variable se la pasamos al componente hijo de file-upload
            this.experiencia_imagen = imagenFile.name;
        }
    }
    wordCounter() {
        this.remainingChars = this.descripcion.value ? 1000 - this.descripcion.value.length : 1000;
    }
}
ExperienciaFormComponent.ɵfac = function ExperienciaFormComponent_Factory(t) { return new (t || ExperienciaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
ExperienciaFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExperienciaFormComponent, selectors: [["app-experiencia-form"]], decls: 10, vars: 1, consts: [[1, "contenedor-pagina-peq"], [2, "margin-left", "auto", "margin-right", "auto"], ["id", "postFeedback"], [1, "mx-auto"], [1, "titulo-pagina"], [1, "my-5", "text-left"], ["routerLink", "/experiencias-listado", 1, "btn", "boton-misc-rojo"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "my-8", "sm:w-full"], ["appearance", "outline", 1, "w-full"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [1, "my-10"], ["matInput", "", "type", "text", 3, "formControl"], [1, "my-8"], ["appearance", "outline", 1, "w-1/2"], ["matInput", "", "type", "number", 3, "formControl"], ["matInput", "", "id", "wmd-input", "data-post-type-id", "2", "cols", "92", "rows", "10", 3, "formControl", "keyup"], [2, "font-style", "italic"], [1, "py-10"], [3, "fileName", "fileSelected"], ["class", "justify-self-end mt-2 mb-5 text-lg mr-10", 4, "ngIf"], ["type", "submit", 1, "btn", "boton-misc-rojo", 3, "disabled"], [3, "value"], [3, "ngClass"], [4, "ngIf"], [1, "justify-self-end", "mt-2", "mb-5", "text-lg", "mr-10"], ["type", "checkbox", 1, "input-checkbox", 3, "formControl"], ["for", "publicado", 1, "align-middle", "text-xs", "sm:text-xl"]], template: function ExperienciaFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Explica tu experiencia con el juguete...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ExperienciaFormComponent_form_9_Template, 39, 14, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.experienciaForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption], styles: [".error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2lhLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0FBQUoiLCJmaWxlIjoiZXhwZXJpZW5jaWEtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuIH1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3713:
/*!****************************************************************************************************!*\
  !*** ./src/app/experiencias-admin/components/experiencia-listado/experiencia-listado.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciaListadoComponent": () => (/* binding */ ExperienciaListadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../globals */ 7503);
/* harmony import */ var _actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/experiencias-admin.actions */ 7051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _shared_pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/mostrar-imagen-defecto.pipe */ 555);
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/format-date.pipe */ 2328);











function ExperienciaListadoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ExperienciaListadoComponent_div_1_div_6_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.trustedUrl[i_r5], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ExperienciaListadoComponent_div_1_div_6_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "mostrarImagenDefecto");
} if (rf & 2) {
    const experiencia_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, experiencia_r4.imagen_experiencia), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ExperienciaListadoComponent_div_1_div_6_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaListadoComponent_div_1_div_6_div_1_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const experiencia_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.editar(experiencia_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaListadoComponent_div_1_div_6_div_1_div_15_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const experiencia_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.eliminar(experiencia_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function ExperienciaListadoComponent_div_1_div_6_div_1_input_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 32);
} if (rf & 2) {
    const experiencia_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "checkboxExperienciaP", experiencia_r4.id, "");
} }
function ExperienciaListadoComponent_div_1_div_6_div_1_input_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 33);
} if (rf & 2) {
    const experiencia_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "checkboxExperienciaNP", experiencia_r4.id, "");
} }
function ExperienciaListadoComponent_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExperienciaListadoComponent_div_1_div_6_div_1_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExperienciaListadoComponent_div_1_div_6_div_1_img_4_Template, 2, 3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 17)(6, "div", 6)(7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExperienciaListadoComponent_div_1_div_6_div_1_div_15_Template, 5, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaListadoComponent_div_1_div_6_div_1_Template_div_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const experiencia_r4 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.publicarExperiencia(experiencia_r4.id, experiencia_r4.publicado)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ExperienciaListadoComponent_div_1_div_6_div_1_input_17_Template, 1, 1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExperienciaListadoComponent_div_1_div_6_div_1_input_18_Template, 1, 1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Publicado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const experiencia_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experiencia_r4.imagen_experiencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !experiencia_r4.imagen_experiencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experiencia_r4.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Publicado: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 8, experiencia_r4.fecha_publicacion, 3), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Puntuaci\u00F3n: ", experiencia_r4.valoracion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experiencia_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experiencia_r4.publicado);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !experiencia_r4.publicado);
} }
function ExperienciaListadoComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExperienciaListadoComponent_div_1_div_6_div_1_Template, 21, 11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaListadoComponent_div_1_div_6_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.getListaExperienciasUsuario()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cargar m\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.experienciasUsuario);
} }
function ExperienciaListadoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Tus experiencias.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6)(4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienciaListadoComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.crearExperiencia()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Crear experiencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExperienciaListadoComponent_div_1_div_6_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.experienciasUsuario);
} }
class ExperienciaListadoComponent {
    constructor(router, sanitizer, store) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.store = store;
        this.loaded = false;
        this.numeroPagina = 1;
        this.server = _globals__WEBPACK_IMPORTED_MODULE_0__.server + '/Experiencias/';
        this.publicado = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.store.select('auth').subscribe({
            next: (authState) => {
                this.userId = authState.auth.user_id;
                this.isAdmin = authState.auth.isAdmin;
            }
        });
        this.store.select('experienciaAdmin').subscribe({
            next: (experienciaState) => {
                this.numeroPagina = experienciaState.numeroPagina;
                //this.idExperiencia = Number.parseInt(experienciaState.idExperiencia);
                this.experienciasUsuario = experienciaState.experiencias;
                this.trustedUrl = this.experienciasUsuario.map((experiencia) => { return this.sanitizer.bypassSecurityTrustUrl(this.server + '/' + experiencia.user_id + '/' + experiencia.id + '/' + experiencia.imagen_experiencia); });
                this.loaded = true;
            }
        });
    }
    ngOnInit() {
        this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_1__.resetExperiencia());
        this.getListaExperienciasUsuario();
    }
    getListaExperienciasUsuario() {
        if (!this.isAdmin) {
            this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_1__.getAllExperienciasByUsuario({ idUser: this.userId, numeroPagina: this.numeroPagina }));
        }
        else {
            this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_1__.getAllExperiencias({ numeroPagina: this.numeroPagina }));
        }
    }
    crearExperiencia() {
        this.router.navigateByUrl('/experiencias-listado/form/');
    }
    editar(idExperiencia) {
        this.router.navigateByUrl('/experiencias-listado/form/' + idExperiencia);
    }
    eliminar(idExperiencia) {
        this.loaded = false;
        this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deleteExperiencia({ idExperiencia: idExperiencia }));
    }
    /*
      myTrackByExperiencia(index: number, experiencia: Experiencia): string {
        //elemento identificador para saber a partir de cuando hay qeu añadir.
        return experiencia.id;
      }
    */
    publicarExperiencia(idExperiencia, publicado) {
        let valorCheckbox;
        if (publicado) {
            valorCheckbox = document.getElementById('checkboxExperienciaP' + idExperiencia).checked;
        }
        else {
            valorCheckbox = document.getElementById('checkboxExperienciaNP' + idExperiencia).checked;
        }
        this.store.dispatch(_actions_experiencias_admin_actions__WEBPACK_IMPORTED_MODULE_1__.publicarExperiencia({ idExperiencia: idExperiencia, valorCheckbox: valorCheckbox }));
    }
}
ExperienciaListadoComponent.ɵfac = function ExperienciaListadoComponent_Factory(t) { return new (t || ExperienciaListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
ExperienciaListadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExperienciaListadoComponent, selectors: [["app-experiencia-listado"]], decls: 2, vars: 2, consts: [["class", "w-screen h-screen", 4, "ngIf"], ["class", "contenedor-pagina-peq", 4, "ngIf"], [1, "w-screen", "h-screen"], [1, "mx-auto", "top:32", "sm:top-96"], [1, "contenedor-pagina-peq"], [1, "titulo-pagina"], [1, ""], ["type", "button", 1, "btn", "btn-success", "boton-crear", 3, "click"], [4, "ngIf"], ["class", " py-2 sm:py-5", 4, "ngFor", "ngForOf"], [1, "p-4", "w-fit", "mx-auto", 3, "click"], [1, "btn", "boton-cargar-mas"], [1, "py-2", "sm:py-5"], [1, "contenedor-item"], [1, "w-1/2", "sm:w-1/3", "h-64", "xl:h-80"], ["class", "imagen-contenedor-item", 3, "src", 4, "ngIf"], ["class", "imagen-contenedor-item imagen-vacia ", 3, "src", 4, "ngIf"], [1, "w-1/2", "sm:w-2/3", "p-3", "h-64", "xl:h-80"], [1, "text-xs", "sm:text-base", "text-red-dark", "mb-3"], [1, "text-xs", "sm:text-base", "2xl:text-xl", "text-red-dark", "font-sans", "font-thin"], [1, "text-left", "font-thin", "pt-2", "sm:pt-3", "text-xs", "sm:text-base", "text-naranja-oscuro"], [1, "mx-auto", "flex", "justify-between"], ["class", "justify-self-start", 4, "ngIf"], [1, "justify-self-end", "mt-2", "mb-5", "text-lg", "mr-10", 3, "click"], ["type", "checkbox", "class", "input-checkbox", "checked", "", 3, "id", 4, "ngIf"], ["type", "checkbox", "class", "input-checkbox", 3, "id", 4, "ngIf"], ["for", "revisadoPublicado", 1, "align-middle", "text-xs", "sm:text-xl"], [1, "imagen-contenedor-item", 3, "src"], [1, "imagen-contenedor-item", "imagen-vacia", 3, "src"], [1, "justify-self-start"], ["type", "button", 1, "btn", "btn-warning", "boton-editar", "mr-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "boton-eliminar", 3, "click"], ["type", "checkbox", "checked", "", 1, "input-checkbox", 3, "id"], ["type", "checkbox", 1, "input-checkbox", 3, "id"]], template: function ExperienciaListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExperienciaListadoComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExperienciaListadoComponent_div_1_Template, 7, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_pipes_mostrar_imagen_defecto_pipe__WEBPACK_IMPORTED_MODULE_2__.MostrarImagenDefectoPipe, _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_3__.FormatDatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNpYS1saXN0YWRvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 194:
/*!*********************************************************************************!*\
  !*** ./src/app/experiencias-admin/modules/experiencias-admin-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciasAdminRoutingModule": () => (/* binding */ ExperienciasAdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_experiencia_form_experiencia_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/experiencia-form/experiencia-form.component */ 9276);
/* harmony import */ var _components_experiencia_listado_experiencia_listado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/experiencia-listado/experiencia-listado.component */ 3713);
/* harmony import */ var src_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guards/auth.guard */ 7618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    {
        path: '',
        component: _components_experiencia_listado_experiencia_listado_component__WEBPACK_IMPORTED_MODULE_1__.ExperienciaListadoComponent,
        canActivate: [src_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
    },
    {
        path: 'form/:id',
        component: _components_experiencia_form_experiencia_form_component__WEBPACK_IMPORTED_MODULE_0__.ExperienciaFormComponent,
        canActivate: [src_app_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
    },
];
class ExperienciasAdminRoutingModule {
}
ExperienciasAdminRoutingModule.ɵfac = function ExperienciasAdminRoutingModule_Factory(t) { return new (t || ExperienciasAdminRoutingModule)(); };
ExperienciasAdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExperienciasAdminRoutingModule });
ExperienciasAdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExperienciasAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 8686:
/*!*************************************************************************!*\
  !*** ./src/app/experiencias-admin/modules/experiencias-admin.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienciasAdminModule": () => (/* binding */ ExperienciasAdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _experiencias_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiencias-admin-routing.module */ 194);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _components_experiencia_listado_experiencia_listado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/experiencia-listado/experiencia-listado.component */ 3713);
/* harmony import */ var _components_experiencia_form_experiencia_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/experiencia-form/experiencia-form.component */ 9276);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var src_app_shared_modules_file_upload_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/file-upload.module */ 9794);
/* harmony import */ var src_app_shared_modules_mostrar_imagen_defecto_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/mostrar-imagen-defecto.module */ 9049);
/* harmony import */ var src_app_shared_modules_format_date_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/format-date.module */ 510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);













class ExperienciasAdminModule {
}
ExperienciasAdminModule.ɵfac = function ExperienciasAdminModule_Factory(t) { return new (t || ExperienciasAdminModule)(); };
ExperienciasAdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ExperienciasAdminModule });
ExperienciasAdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_shared_modules_file_upload_module__WEBPACK_IMPORTED_MODULE_3__.FileUploadModule,
        src_app_shared_modules_mostrar_imagen_defecto_module__WEBPACK_IMPORTED_MODULE_4__.MostrarImagenDefectoModule,
        src_app_shared_modules_format_date_module__WEBPACK_IMPORTED_MODULE_5__.FormatDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _experiencias_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperienciasAdminRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ExperienciasAdminModule, { declarations: [_components_experiencia_form_experiencia_form_component__WEBPACK_IMPORTED_MODULE_2__.ExperienciaFormComponent,
        _components_experiencia_listado_experiencia_listado_component__WEBPACK_IMPORTED_MODULE_1__.ExperienciaListadoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_shared_modules_file_upload_module__WEBPACK_IMPORTED_MODULE_3__.FileUploadModule,
        src_app_shared_modules_mostrar_imagen_defecto_module__WEBPACK_IMPORTED_MODULE_4__.MostrarImagenDefectoModule,
        src_app_shared_modules_format_date_module__WEBPACK_IMPORTED_MODULE_5__.FormatDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _experiencias_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperienciasAdminRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_experiencias-admin_modules_experiencias-admin_module_ts.js.map