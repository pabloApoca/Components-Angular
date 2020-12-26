import { Component, OnInit } from '@angular/core';
import { ServicioFavoritosService } from "../servicio-favoritos.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavoritos: ServicioFavoritosService) { }

  public listaDeVideos: Array<any> = [];

  ngOnInit(): void {
    this.servicioFavoritos.disparadorDeFavoritos.subscribe(data =>{
      console.log('Recibiendo data: ', data);
      this.listaDeVideos.push(data);
    })
  }

}
