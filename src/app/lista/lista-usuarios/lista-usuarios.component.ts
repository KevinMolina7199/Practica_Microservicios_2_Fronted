import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();

  }
  private obtenerUsuarios() {
    this.usuarioService.obtenerListaUsuarios().subscribe(dato => {
      this.usuarios = dato;
    })
  }

  actualizarUsuario(id: number) {
    this.router.navigate(['actualizar-usuario', id]);

  }

  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id).subscribe(dato => {
      this.obtenerUsuarios();
    });
  }
} 
