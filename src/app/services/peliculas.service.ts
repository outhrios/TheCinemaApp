import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Pelicula {
  id: number;
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'The Dark Knight', descripcion: 'Batman vs Joker' },
    { id: 2, titulo: 'Inception', descripcion: 'Un thriller de ciencia ficción sobre los sueños' },
    { id: 3, titulo: 'Interstellar', descripcion: 'Exploración espacial para salvar a la humanidad' },
    { id: 4, titulo: 'The Matrix', descripcion: 'Una lucha entre humanos y máquinas en un futuro distópico' }
  ];

  private peliculasSubject = new BehaviorSubject<Pelicula[]>(this.peliculas);

  constructor() { }

  obtenerPeliculas() {
    return this.peliculasSubject.asObservable();
  }

  buscarPeliculas(titulo: string) {
    return this.peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
  }
}
