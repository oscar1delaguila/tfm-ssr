import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';


@Pipe({
  name: 'mostrarImagenDefecto'
})
export class MostrarImagenDefectoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return value ? value : 'assets/imagen-defecto/image-regular.svg'; 

  }

}
