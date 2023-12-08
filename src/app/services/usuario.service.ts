import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //LISTA DE USUARIOS DEL BACKEND
  private baseURL="http://localhost:8001/user";

  constructor(private httpClient: HttpClient) { }

  //OBTIENE LOS USUARIOS
  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }
  
  //REGISTRAR UN EMPLEADO
  registrarUsuario(usuario:Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/save`,usuario);
  }

  eliminarUsuario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }







  

}
