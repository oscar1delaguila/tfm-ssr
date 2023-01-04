import { Injectable } from '@angular/core';
import {  Observable, of, timer } from 'rxjs';
import { ResponseError } from '../models/response-error.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  constructor() { }

  managementToast( validRequest: boolean, actionPerformed:string, error?: ResponseError):void {

    let toastMsg = <HTMLSpanElement>document.getElementById('postFeedback');

    if (toastMsg) {
  
      if (validRequest) {
        toastMsg.className =  ' show requestOk ';
        toastMsg.textContent = actionPerformed + 'Correcto';

      } else {
        toastMsg.className = ' show requestKo ';
        toastMsg.textContent = actionPerformed + 'Erróneo';
      }
      toastMsg.style.display = 'inline-block';    
      timer(3000).subscribe({
        next:(value:number) => {
          if (value == 0) {
              let toastMsg = <HTMLSpanElement>document.getElementById('postFeedback');
              toastMsg.style.display = 'none';            
          }
        }
      });
    } 
  }

  errorLog(error: ResponseError): void {
    console.error('path:', error.path);
    console.error('timestamp:', error.timestamp);
    console.error('message:', error.message);
    console.error('messageDetail:', error.messageDetail);
    console.error('statusCode:', error.statusCode);
  }


}
