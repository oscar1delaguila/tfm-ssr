"use strict";(self.webpackChunkgegantoys=self.webpackChunkgegantoys||[]).push([[123],{4123:(ai,x,r)=>{r.r(x),r.d(x,{ExperienciasAdminModule:()=>ri});var u=r(6895),m=r(6582),o=r(4006),d=r(7051),i=r(4650),_=r(9653),Z=r(7082),l=r(9549),f=r(4144),g=r(4385),T=r(3238);function E(t,n){if(1&t&&(i.TgZ(0,"mat-option",25),i._uU(1),i.qZA()),2&t){const e=n.$implicit;i.Q6J("value",e.id),i.xp6(1),i.Oqu(e.titulo)}}function C(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," T\xedtulo del juguete es obligatorio. "),i.qZA())}function b(t,n){if(1&t&&(i.TgZ(0,"div",26),i.YNc(1,C,2,0,"div",27),i.qZA()),2&t){const e=i.oxw(2);i.Q6J("ngClass","error"),i.xp6(1),i.Q6J("ngIf",e.juguetesTitulos.errors.required)}}function I(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," T\xedtulo experiencia es obligatorio "),i.qZA())}function A(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," T\xedtulo experiencia solamente puede ser de 255 caracteres. "),i.qZA())}function F(t,n){if(1&t&&(i.TgZ(0,"div",26),i.YNc(1,I,2,0,"div",27),i.YNc(2,A,2,0,"div",27),i.qZA()),2&t){const e=i.oxw(2);i.Q6J("ngClass","error"),i.xp6(1),i.Q6J("ngIf",e.titulo.errors.required),i.xp6(1),i.Q6J("ngIf",e.titulo.errors.maxlength)}}function y(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," La valoraci\xf3n es obligatoria. "),i.qZA())}function J(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," La valoraci\xf3n no puede ser superior a 10. "),i.qZA())}function U(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," La valoraci\xf3n no puede ser inferior a 0. "),i.qZA())}function N(t,n){if(1&t&&(i.TgZ(0,"div",26),i.YNc(1,y,2,0,"div",27),i.YNc(2,J,2,0,"div",27),i.YNc(3,U,2,0,"div",27),i.qZA()),2&t){const e=i.oxw(2);i.Q6J("ngClass","error"),i.xp6(1),i.Q6J("ngIf",e.valoracion.errors.required),i.xp6(1),i.Q6J("ngIf",e.valoracion.errors.max),i.xp6(1),i.Q6J("ngIf",e.valoracion.errors.min)}}function Q(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," La descripci\xf3n es obligatoria "),i.qZA())}function q(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," La descripci\xf3n no puede ser superior a 1000 caracteres. "),i.qZA())}function L(t,n){if(1&t&&(i.TgZ(0,"div",26),i.YNc(1,Q,2,0,"div",27),i.YNc(2,q,2,0,"div",27),i.qZA()),2&t){const e=i.oxw(2);i.Q6J("ngClass","error"),i.xp6(1),i.Q6J("ngIf",e.descripcion.errors.required),i.xp6(1),i.Q6J("ngIf",e.descripcion.errors.maxlength)}}function w(t,n){1&t&&(i.TgZ(0,"div"),i._uU(1," Indica si vas a publicar o no la experiencia. "),i.qZA())}function k(t,n){if(1&t&&(i.TgZ(0,"div",26),i.YNc(1,w,2,0,"div",27),i.qZA()),2&t){const e=i.oxw(3);i.Q6J("ngClass","error"),i.xp6(1),i.Q6J("ngIf",e.descripcion.errors.required)}}function Y(t,n){if(1&t&&(i.TgZ(0,"div",28),i._UZ(1,"input",29),i.TgZ(2,"label",30),i._uU(3,"Publicar"),i.qZA(),i.YNc(4,k,2,2,"div",13),i.qZA()),2&t){const e=i.oxw(2);i.xp6(1),i.Q6J("formControl",e.publicado),i.xp6(3),i.Q6J("ngIf",e.descripcion.errors&&e.descripcion.touched)}}function j(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"form",8),i.NdJ("ngSubmit",function(){i.CHM(e);const a=i.oxw();return i.KtG(a.saveExperiencia())}),i.TgZ(1,"div",9)(2,"mat-form-field",10)(3,"mat-label"),i._uU(4,"Selecciona el juguete que compraste:"),i.qZA(),i.TgZ(5,"mat-select",11),i.YNc(6,E,2,2,"mat-option",12),i.qZA(),i.TgZ(7,"mat-error"),i.YNc(8,b,2,2,"div",13),i.qZA()()(),i.TgZ(9,"div",14)(10,"mat-form-field",10)(11,"mat-label"),i._uU(12,"T\xedtulo:"),i.qZA(),i._UZ(13,"input",15),i.TgZ(14,"mat-error"),i.YNc(15,F,3,3,"div",13),i.qZA()()(),i.TgZ(16,"div",16)(17,"mat-form-field",17)(18,"mat-label"),i._uU(19,"Valora tu experiencias del 1 al 10:"),i.qZA(),i._UZ(20,"input",18),i.TgZ(21,"mat-error"),i.YNc(22,N,4,4,"div",13),i.qZA()()(),i.TgZ(23,"div",14)(24,"mat-form-field",10)(25,"mat-label"),i._uU(26,"Descripci\xf3n:"),i.qZA(),i.TgZ(27,"textarea",19),i.NdJ("keyup",function(){i.CHM(e);const a=i.oxw();return i.KtG(a.wordCounter())}),i._uU(28,"              "),i.qZA(),i.TgZ(29,"mat-error"),i.YNc(30,L,3,3,"div",13),i.qZA()(),i.TgZ(31,"div",20),i._uU(32),i.qZA()(),i.TgZ(33,"div",21)(34,"app-file-upload",22),i.NdJ("fileSelected",function(a){i.CHM(e);const s=i.oxw();return i.KtG(s.imagenCargada(a))}),i.qZA()(),i.YNc(35,Y,5,2,"div",23),i.TgZ(36,"div",21)(37,"button",24),i._uU(38," Guardar Experiencia "),i.qZA()()()}if(2&t){const e=i.oxw();i.Q6J("formGroup",e.experienciaForm),i.xp6(5),i.Q6J("formControl",e.juguetesTitulos),i.xp6(1),i.Q6J("ngForOf",e.juguetesCompradosLista),i.xp6(2),i.Q6J("ngIf",e.juguetesTitulos.errors&&e.juguetesTitulos.touched),i.xp6(5),i.Q6J("formControl",e.titulo),i.xp6(2),i.Q6J("ngIf",e.titulo.errors&&e.titulo.touched),i.xp6(5),i.Q6J("formControl",e.valoracion),i.xp6(2),i.Q6J("ngIf",e.valoracion.errors&&e.valoracion.touched),i.xp6(5),i.Q6J("formControl",e.descripcion),i.xp6(3),i.Q6J("ngIf",e.descripcion.errors&&e.descripcion.touched),i.xp6(2),i.hij(" ",e.remainingChars," M\xe1ximo de caracteres... "),i.xp6(2),i.Q6J("fileName",e.experiencia_imagen),i.xp6(1),i.Q6J("ngIf",e.isAdmin),i.xp6(2),i.Q6J("disabled",e.experienciaForm.invalid)}}let M=(()=>{class t{constructor(e,c,a,s){this.activatedRoute=e,this.formBuilder=c,this.router=a,this.store=s,this.remainingChars=1e3,this.loaded=!1,this.experiencia_imagen="",this.envioFormDataExperiencia=new FormData,this.experienciaId=this.activatedRoute.snapshot.paramMap.get("id")||"",this.isUpdateMode=!!this.experienciaId,this.titulo=new o.NI("",[o.kI.required,o.kI.maxLength(255)]),this.descripcion=new o.NI("",[o.kI.required,o.kI.maxLength(3500)]),this.publicado=new o.NI(!1,[o.kI.required]),this.juguetesTitulos=new o.NI("",[o.kI.required]),this.valoracion=new o.NI(0,[o.kI.required,o.kI.max(10),o.kI.min(0)]),this.experienciaForm=this.formBuilder.group({titulo:this.titulo,descripcion:this.descripcion,juguetesTitulos:this.juguetesCompradosLista,publicado:this.publicado,valoracion:this.valoracion}),this.store.select("auth").subscribe({next:p=>{this.userId=Number.parseInt(p.auth.user_id),this.isAdmin=p.auth.isAdmin}}),this.store.select("experienciaAdmin").subscribe({next:p=>{this.juguetesCompradosLista=p.titulosAllJuguetes,this.experiencia=p.experiencia,this.titulo.setValue(this.experiencia.titulo),this.descripcion.setValue(this.experiencia.descripcion),this.publicado.setValue(this.experiencia.publicado),this.juguetesTitulos.setValue(this.experiencia.juguete_id),this.valoracion.setValue(this.experiencia.valoracion),this.experiencia_imagen=this.experiencia.imagen_experiencia,this.experienciaForm=this.formBuilder.group({titulo:this.titulo,descripcion:this.descripcion,juguetesTitulos:this.juguetesTitulos,publicado:this.publicado,valoracion:this.valoracion})}})}loadTitulosJuguetesComprados(){this.store.dispatch(d._J())}ngOnInit(){this.loadTitulosJuguetesComprados(),this.isUpdateMode&&this.store.dispatch(d.Qy({idExperiencia:this.experienciaId}))}updateExperiencia(){this.store.dispatch(d.h6({experiencia:this.envioFormDataExperiencia}))}addExperiencia(){this.store.dispatch(d.Ap({experiencia:this.envioFormDataExperiencia}))}saveExperiencia(){this.isUpdateMode&&this.envioFormDataExperiencia.append("id",this.experienciaId||""),this.envioFormDataExperiencia.append("titulo",this.titulo.value),this.envioFormDataExperiencia.append("descripcion",this.descripcion.value),this.envioFormDataExperiencia.append("user_id",this.userId.toString()),this.envioFormDataExperiencia.append("juguete_id",this.juguetesTitulos.value),this.envioFormDataExperiencia.append("publicado",this.publicado.value?"1":"0"),this.envioFormDataExperiencia.append("valoracion",this.valoracion.value.toString()),this.envioFormDataExperiencia.append("fecha_publicacion",(0,u.p6)(new Date,"yyyy-MM-dd","en")),this.envioFormDataExperiencia.append("imagen_experiencia",this.experiencia_imagen),this.isUpdateMode?this.updateExperiencia():this.addExperiencia()}imagenCargada(e){e&&(this.envioFormDataExperiencia.append("thumbnail",e),this.experiencia_imagen=e.name)}wordCounter(){this.remainingChars=this.descripcion.value?3e3-this.descripcion.value.length:3e3}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(m.gz),i.Y36(o.qu),i.Y36(m.F0),i.Y36(_.yh))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-experiencia-form"]],decls:10,vars:1,consts:[[1,"contenedor-pagina-peq"],[2,"margin-left","auto","margin-right","auto"],["id","postFeedback"],[1,"mx-auto"],[1,"titulo-pagina"],[1,"my-5","text-left"],["routerLink","/experiencias-listado",1,"btn","boton-misc-rojo"],["enctype","multipart/form-data",3,"formGroup","ngSubmit",4,"ngIf"],["enctype","multipart/form-data",3,"formGroup","ngSubmit"],[1,"my-8","sm:w-full"],["appearance","outline",1,"w-full"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"ngClass",4,"ngIf"],[1,"my-10"],["matInput","","type","text",3,"formControl"],[1,"my-8"],["appearance","outline",1,"w-1/2"],["matInput","","type","number",3,"formControl"],["matInput","","id","wmd-input","data-post-type-id","2","cols","92","rows","10",3,"formControl","keyup"],[2,"font-style","italic"],[1,"py-10"],[3,"fileName","fileSelected"],["class","justify-self-end mt-2 mb-5 text-lg mr-10",4,"ngIf"],["type","submit",1,"btn","boton-misc-rojo",3,"disabled"],[3,"value"],[3,"ngClass"],[4,"ngIf"],[1,"justify-self-end","mt-2","mb-5","text-lg","mr-10"],["type","checkbox",1,"input-checkbox",3,"formControl"],["for","publicado",1,"align-middle","text-xs","sm:text-xl"]],template:function(e,c){1&e&&(i.TgZ(0,"div",0)(1,"div",1),i._UZ(2,"div",2),i.qZA(),i.TgZ(3,"div",3)(4,"div",4),i._uU(5,"Explica tu experiencia con el juguete..."),i.qZA(),i.TgZ(6,"div",5)(7,"a",6),i._uU(8,"Volver"),i.qZA()(),i.YNc(9,j,39,14,"form",7),i.qZA()()),2&e&&(i.xp6(9),i.Q6J("ngIf",c.experienciaForm))},dependencies:[u.mk,u.sg,u.O5,Z.Y,m.yS,o._Y,o.Fj,o.wV,o.Wl,o.JJ,o.JL,o.oH,o.sg,l.TO,l.KE,l.hX,f.Nt,g.gD,T.ey],styles:[".error[_ngcontent-%COMP%]{color:red}"]}),t})();var D=r(7503),P=r(1481),v=r(1572),G=r(555),O=r(2328);function B(t,n){1&t&&(i.TgZ(0,"div",2),i._UZ(1,"mat-spinner",3),i.qZA())}function H(t,n){if(1&t&&i._UZ(0,"img",27),2&t){const e=i.oxw().index,c=i.oxw(3);i.Q6J("src",c.trustedUrl[e],i.LSH)}}function S(t,n){if(1&t&&(i._UZ(0,"img",28),i.ALo(1,"mostrarImagenDefecto")),2&t){const e=i.oxw().$implicit;i.Q6J("src",i.lcZ(1,1,e.imagen_experiencia),i.LSH)}}function K(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div",29)(1,"button",30),i.NdJ("click",function(){i.CHM(e);const a=i.oxw().$implicit,s=i.oxw(3);return i.KtG(s.editar(a.id))}),i._uU(2,"Editar"),i.qZA(),i.TgZ(3,"button",31),i.NdJ("click",function(){i.CHM(e);const a=i.oxw().$implicit,s=i.oxw(3);return i.KtG(s.eliminar(a.id))}),i._uU(4,"Eliminar"),i.qZA()()}}function V(t,n){if(1&t&&i._UZ(0,"input",32),2&t){const e=i.oxw().$implicit;i.MGl("id","checkboxExperienciaP",e.id,"")}}function $(t,n){if(1&t&&i._UZ(0,"input",33),2&t){const e=i.oxw().$implicit;i.MGl("id","checkboxExperienciaNP",e.id,"")}}function z(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div",12)(1,"div",13)(2,"div",14),i.YNc(3,H,1,1,"img",15),i.YNc(4,S,2,3,"img",16),i.qZA(),i.TgZ(5,"div",17)(6,"div",6)(7,"div",18),i._uU(8),i.qZA(),i.TgZ(9,"div",19),i._uU(10),i.ALo(11,"formatDate"),i.qZA()(),i.TgZ(12,"div",20),i._uU(13),i.qZA()()(),i.TgZ(14,"div",21),i.YNc(15,K,5,0,"div",22),i.TgZ(16,"div",23),i.NdJ("click",function(){const s=i.CHM(e).$implicit,p=i.oxw(3);return i.KtG(p.publicarExperiencia(s.id,s.publicado))}),i.YNc(17,V,1,1,"input",24),i.YNc(18,$,1,1,"input",25),i.TgZ(19,"label",26),i._uU(20,"Publicado"),i.qZA()()()()}if(2&t){const e=n.$implicit;i.xp6(3),i.Q6J("ngIf",e.imagen_experiencia),i.xp6(1),i.Q6J("ngIf",!e.imagen_experiencia),i.xp6(4),i.Oqu(e.titulo),i.xp6(2),i.hij("Publicado: ",i.xi3(11,8,e.fecha_publicacion,3),""),i.xp6(3),i.hij("Puntuaci\xf3n: ",e.valoracion,""),i.xp6(2),i.Q6J("ngIf",e),i.xp6(2),i.Q6J("ngIf",e.publicado),i.xp6(1),i.Q6J("ngIf",!e.publicado)}}function R(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div"),i.YNc(1,z,21,11,"div",9),i.TgZ(2,"div",10),i.NdJ("click",function(){i.CHM(e);const a=i.oxw(2);return i.KtG(a.getListaExperienciasUsuario())}),i.TgZ(3,"a",11),i._uU(4,"Cargar m\xe1s"),i.qZA()()()}if(2&t){const e=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",e.experienciasUsuario)}}function X(t,n){if(1&t){const e=i.EpF();i.TgZ(0,"div",4)(1,"div",5),i._uU(2,"Tus experiencias."),i.qZA(),i.TgZ(3,"div",6)(4,"button",7),i.NdJ("click",function(){i.CHM(e);const a=i.oxw();return i.KtG(a.crearExperiencia())}),i._uU(5,"Crear experiencia"),i.qZA()(),i.YNc(6,R,5,1,"div",8),i.qZA()}if(2&t){const e=i.oxw();i.xp6(6),i.Q6J("ngIf",e.experienciasUsuario)}}let W=(()=>{class t{constructor(e,c,a){this.router=e,this.sanitizer=c,this.store=a,this.loaded=!1,this.numeroPagina=1,this.server=D.fw+"/Experiencias/",this.publicado=new o.NI,this.store.select("auth").subscribe({next:s=>{this.userId=s.auth.user_id,this.isAdmin=s.auth.isAdmin}}),this.store.select("experienciaAdmin").subscribe({next:s=>{this.numeroPagina=s.numeroPagina,this.experienciasUsuario=s.experiencias,this.trustedUrl=this.experienciasUsuario.map(p=>this.sanitizer.bypassSecurityTrustUrl(this.server+"/"+p.user_id+"/"+p.id+"/"+p.imagen_experiencia)),this.loaded=!0}})}ngOnInit(){this.store.dispatch(d.kB()),this.getListaExperienciasUsuario()}getListaExperienciasUsuario(){this.store.dispatch(this.isAdmin?d.QV({numeroPagina:this.numeroPagina}):d.bf({idUser:this.userId,numeroPagina:this.numeroPagina}))}crearExperiencia(){this.router.navigateByUrl("/experiencias-listado/form/")}editar(e){this.router.navigateByUrl("/experiencias-listado/form/"+e)}eliminar(e){this.loaded=!1,this.store.dispatch(d.tm({idExperiencia:e}))}publicarExperiencia(e,c){let a;a=c?document.getElementById("checkboxExperienciaP"+e).checked:document.getElementById("checkboxExperienciaNP"+e).checked,this.store.dispatch(d.ig({idExperiencia:e,valorCheckbox:a}))}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(m.F0),i.Y36(P.H7),i.Y36(_.yh))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-experiencia-listado"]],decls:2,vars:2,consts:[["class","w-screen h-screen",4,"ngIf"],["class","contenedor-pagina-peq",4,"ngIf"],[1,"w-screen","h-screen"],[1,"mx-auto","top:32","sm:top-96"],[1,"contenedor-pagina-peq"],[1,"titulo-pagina"],[1,""],["type","button",1,"btn","btn-success","boton-crear",3,"click"],[4,"ngIf"],["class"," py-2 sm:py-5",4,"ngFor","ngForOf"],[1,"p-4","w-fit","mx-auto",3,"click"],[1,"btn","boton-cargar-mas"],[1,"py-2","sm:py-5"],[1,"contenedor-item"],[1,"w-1/2","sm:w-1/3","h-64","xl:h-80"],["class","imagen-contenedor-item",3,"src",4,"ngIf"],["class","imagen-contenedor-item imagen-vacia ",3,"src",4,"ngIf"],[1,"w-1/2","sm:w-2/3","p-3","h-64","xl:h-80"],[1,"text-xs","sm:text-base","text-red-dark","mb-3"],[1,"text-xs","sm:text-base","2xl:text-xl","text-red-dark","font-sans","font-thin"],[1,"text-left","font-thin","pt-2","sm:pt-3","text-xs","sm:text-base","text-naranja-oscuro"],[1,"mx-auto","flex","justify-between"],["class","justify-self-start",4,"ngIf"],[1,"justify-self-end","mt-2","mb-5","text-lg","mr-10",3,"click"],["type","checkbox","class","input-checkbox","checked","",3,"id",4,"ngIf"],["type","checkbox","class","input-checkbox",3,"id",4,"ngIf"],["for","revisadoPublicado",1,"align-middle","text-xs","sm:text-xl"],[1,"imagen-contenedor-item",3,"src"],[1,"imagen-contenedor-item","imagen-vacia",3,"src"],[1,"justify-self-start"],["type","button",1,"btn","btn-warning","boton-editar","mr-3",3,"click"],["type","button",1,"btn","btn-danger","boton-eliminar",3,"click"],["type","checkbox","checked","",1,"input-checkbox",3,"id"],["type","checkbox",1,"input-checkbox",3,"id"]],template:function(e,c){1&e&&(i.YNc(0,B,2,0,"div",0),i.YNc(1,X,7,1,"div",1)),2&e&&(i.Q6J("ngIf",!c.loaded),i.xp6(1),i.Q6J("ngIf",c.loaded))},dependencies:[u.sg,u.O5,v.Ou,G.w,O.i]}),t})();var h=r(7618);const ii=[{path:"",component:W,canActivate:[h.a]},{path:"form/:id",component:M,canActivate:[h.a]}];let ei=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[m.Bz.forChild(ii),m.Bz]}),t})();var ti=r(9794),ni=r(9049),oi=r(510);let ri=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[u.ez,ti.O,ni.x,oi.p,v.Cq,ei,o.UX,l.lN,f.c,g.LD]}),t})()}}]);