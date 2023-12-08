import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cursos } from '../clases/cursos';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //LISTA DE CURSOS DEL BACKEND
  private baseURL = "http://localhost:8002/api/cource";

  constructor(private httpClient: HttpClient) { }

  //OBTIENE LOS USUARIOS
  obtenerListaCursos(): Observable<Cursos[]> {
    return this.httpClient.get<Cursos[]>(`${this.baseURL}/allList`);
  }
  //REGISTRAR UN EMPLEADO
  registrarCurso(curso: Cursos): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, curso);
  }

  eliminarCurso(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
