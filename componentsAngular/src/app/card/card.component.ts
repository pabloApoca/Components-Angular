import { Component, OnInit, Input } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() dataEntrante:any;

  public image: string;

  constructor( private servicioFavoritos: ServicioFavoritosService) { }

  ngOnInit(): void {
   // console.log('Entrando data:' , this.dataEntrante);
  }

  agregarFavorito(){
    //console.log( this.dataEntrante);
    this.servicioFavoritos.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    })
  }

}
