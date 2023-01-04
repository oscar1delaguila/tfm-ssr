
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent {

  
  @Input() fileName!:string;  
  @Output() fileSelected:EventEmitter<File> = new EventEmitter<File>();

  file!:File;
  upload:boolean;
  

  constructor( ) {

    this.upload = false;
    this.fileName = '';

  }

  onFileSelected(event:any) {

      this.file = event.target.files[0];

      if (this.file) {

        this.fileName = this.file.name;
        this.fileSelected.emit(this.file);
        this.upload = true;
  
      }
    
  }

  
}

