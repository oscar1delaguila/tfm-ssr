import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Auth } from 'src/app/auth/models/auth.interface';
import { AuthState } from 'src/app/auth/reducers';
import { DudaMail } from 'src/app/shared/models/dudaMail.interface';
import { Juguete } from 'src/app/shared/models/juguete.interface';
import { MailService } from '../../services/mail.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  
  juguetes!:Juguete[];
  loaded:boolean = false;

  dudaForm!: FormGroup;
  dudaMail!: DudaMail;

  email!:FormControl;
  dudaTextArea!:FormControl;
  
  remainingChars:number = 1000;
  

  panelOpenState = false;
  sectionId!:string;

  userId!:number; 


 

  constructor( 
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder,
      private mailService: MailService,
      private store: Store<AuthState> 

     ) {}
     

  ngOnInit(): void {
    
    this.email = new FormControl('', Validators.required );
    this.dudaTextArea  = new FormControl('', Validators.required);

    this.dudaForm = this.formBuilder.group({
        email: this.email,
        textArea: this.dudaTextArea,
    });

    this.store.select('auth').subscribe({
      next:(auth:Auth) => {
        this.userId = Number.parseInt(auth.user_id);
      }
    });


    this.activatedRoute.fragment.subscribe({
      next:(sectionId: string | null) => {
          if (sectionId != null) {
            this.sectionId = sectionId;
            this.jumpTo();
          }
      }
    });
  }

  enviarDuda():void {

    this.dudaMail = {
      
      email: this.email.value,
      duda: this.dudaTextArea.value,

    }

    this.mailService.sendEmail(this.dudaMail).subscribe({

      next:(response:string)=>{
        if (response) {
          console.log("Mensaje: ", response);
        }
      }
    });
  }
  
  charCounter() {

    this.remainingChars = this.dudaTextArea.value ? 1000 - this.dudaTextArea.value.length : 1000;
  }


  jumpTo():void {

      let id = <HTMLDivElement>document.getElementById(this.sectionId);
      id.scrollIntoView({behavior:'auto'})
  }
 

}
