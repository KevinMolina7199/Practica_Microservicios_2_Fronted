import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit{
  
  usuario: Usuario=new Usuario();

  constructor(private usuarioServicio: UsuarioService, private router:Router){}

  ngOnInit(): void {
  
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.mostrarEnLista();
    },error => console.log(error));
  }
  mostrarEnLista(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    this.guardarUsuario();
  }
}
