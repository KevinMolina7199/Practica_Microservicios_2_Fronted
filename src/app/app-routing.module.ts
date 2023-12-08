import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registros/registrar-usuario/registrar-usuario.component';
import { ListaCursosComponent } from './lista/lista-cursos/lista-cursos.component';
import { RegistrarCursosComponent } from './registros/registrar-cursos/registrar-cursos.component';


const routes: Routes = [
  {path : 'usuarios',component: ListaUsuariosComponent},
  {path : '',redirectTo: 'usuarios',pathMatch:'full'},
  {path : 'registrar-usuario',component: RegistrarUsuarioComponent},
  {path : 'cursos',component: ListaCursosComponent},
  {path : 'registrar-curso',component: RegistrarCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
