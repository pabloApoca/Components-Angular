import {EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {

  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
