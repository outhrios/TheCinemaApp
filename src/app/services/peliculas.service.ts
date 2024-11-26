import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Pelicula {
  id: number;
  titulo: string;
  descripcion: string;
  año: number;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'Batman', descripcion: 'Batman vs Joker', año: 2008 },
    { id: 2, titulo: 'El Origen', descripcion: 'Un thriller de ciencia ficción sobre los sueños', año: 2010 },
    { id: 3, titulo: 'Interstellar', descripcion: 'Exploración espacial para salvar a la humanidad', año: 2014 },
    { id: 4, titulo: 'Matrix', descripcion: 'Una lucha entre humanos y máquinas en un futuro distópico', año: 1999 },
    { id: 5, titulo: 'Forrest Gump', descripcion: 'Un hombre con un destino extraordinario en la historia de Estados Unidos', año: 1994 },
    { id: 6, titulo: 'Sueños de Fuga', descripcion: 'La amistad y la esperanza en una prisión de máxima seguridad', año: 1994 },
    { id: 7, titulo: 'El Padrino', descripcion: 'La saga de la familia Corleone en el crimen organizado', año: 1972 },
    { id: 8, titulo: 'Pulp Fiction: Tiempos Violentos', descripcion: 'Historias entrelazadas en el mundo del crimen', año: 1994 },
    { id: 9, titulo: 'El Señor de los Anillos: La Comunidad del Anillo', descripcion: 'Un grupo de héroes emprende un viaje para destruir un anillo maldito', año: 2001 },
    { id: 10, titulo: 'El Silencio de los Inocentes', descripcion: 'Un detective busca resolver un caso con la ayuda de un asesino encarcelado', año: 1991 },
    { id: 11, titulo: 'El Club de la Pelea', descripcion: 'Un hombre insatisfecho crea un club secreto para liberar su frustración', año: 1999 },
    { id: 12, titulo: 'El Prestigio', descripcion: 'Dos ilusionistas rivales luchan por superar al otro en el mundo del misterio', año: 2006 },
    { id: 13, titulo: 'Gladiador', descripcion: 'Un general romano busca venganza tras ser traicionado', año: 2000 },
    { id: 14, titulo: 'Star Wars: Una Nueva Esperanza', descripcion: 'La lucha entre el Imperio Galáctico y la rebelión por la libertad', año: 1977 },
    { id: 15, titulo: 'Los Infiltrados', descripcion: 'Un policía infiltrado y un criminal infiltrado en la policía en una ciudad corrupta', año: 2006 },
    { id: 16, titulo: 'El Rey León', descripcion: 'La historia de un joven león que lucha por reclamar su trono', año: 1994 },
    { id: 17, titulo: 'La Milla Verde', descripcion: 'Un prisionero con habilidades sobrenaturales impacta a los guardias de prisión', año: 1999 },
    { id: 18, titulo: 'Parque Jurásico', descripcion: 'Un parque temático con dinosaurios clonados se convierte en un lugar mortal', año: 1993 },
    { id: 19, titulo: 'Titanic', descripcion: 'Una historia de amor a bordo del famoso barco hundido', año: 1997 },
    { id: 20, titulo: 'Volver al Futuro', descripcion: 'Un joven viaja al pasado con la ayuda de una máquina del tiempo', año: 1985 },
    { id: 21, titulo: 'Los Vengadores', descripcion: 'Un grupo de superhéroes se une para proteger el mundo de una invasión alienígena', año: 2012 },
    { id: 22, titulo: 'Avatar: El Último Maestro del Aire', descripcion: 'Un ex-marine en un planeta alienígena lucha por salvar a sus habitantes', año: 2009 },
    { id: 23, titulo: 'Deadpool', descripcion: 'Un antihéroe irreverente busca venganza mientras lucha contra el crimen', año: 2016 },
    { id: 24, titulo: 'Mad Max: Furia en el Camino', descripcion: 'En un futuro post-apocalíptico, un hombre y una mujer luchan por la supervivencia', año: 2015 },
    { id: 25, titulo: 'La Lista de Schindler', descripcion: 'La historia de un hombre que salva vidas durante el Holocausto', año: 1993 },
    { id: 26, titulo: 'Blade Runner 2049', descripcion: 'En un futuro distópico, un blade runner descubre un secreto que podría destruir la sociedad', año: 2017 },
    { id: 27, titulo: 'La Red Social', descripcion: 'La creación de Facebook y la batalla legal entre sus fundadores', año: 2010 },
    { id: 28, titulo: 'Coco', descripcion: 'Un niño mexicano viaja al mundo de los muertos para descubrir su legado familiar', año: 2017 },
    { id: 29, titulo: 'Batman: La Leyenda Renace', descripcion: 'Batman regresa para enfrentarse a un nuevo villano y salvar Gotham', año: 2012 },
    { id: 30, titulo: 'Spider-Man: Un Nuevo Universo', descripcion: 'Miles Morales se convierte en Spider-Man y conoce a otros de su misma identidad', año: 2018 },
    { id: 31, titulo: '12 Hombres en Pugna', descripcion: 'Doce jurados deben deliberar sobre la culpabilidad de un joven acusado de asesinato', año: 1957 },
    { id: 32, titulo: 'El Show de Truman', descripcion: 'Un hombre descubre que toda su vida ha sido un espectáculo televisivo', año: 1998 },
    { id: 33, titulo: 'Se7en: El Pecado Original', descripcion: 'Dos detectives buscan a un asesino que comete crímenes basados en los siete pecados capitales', año: 1995 },
    { id: 34, titulo: 'Sospechosos Comunes', descripcion: 'Un grupo de criminales se ve involucrado en un misterio relacionado con un hombre enigmático', año: 1995 },
    { id: 35, titulo: 'El Código Enigma', descripcion: 'La historia real de Alan Turing y su contribución para descifrar los códigos nazis', año: 2014 }
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
