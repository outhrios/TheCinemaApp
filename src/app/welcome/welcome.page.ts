import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  peliculas: any[] = []; 
  busqueda: string = ''; 
  error404: boolean = false; 

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculas = [];
  }

  buscarPeliculas() {
    if (this.busqueda) {
      const peliculasEncontradas = this.peliculasService.buscarPeliculas(this.busqueda);

      if (peliculasEncontradas.length > 0) {
        this.peliculas = peliculasEncontradas;
        this.error404 = false; 
      } else {
        this.peliculas = [];
        this.error404 = true;
      }
    } else {
      this.peliculas = [];
      this.error404 = false;
    }
  }
}
