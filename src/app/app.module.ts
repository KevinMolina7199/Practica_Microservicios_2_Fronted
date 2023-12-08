import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista/lista-usuarios/lista-usuarios.component';
import{ HttpClientModule } from '@angular/common/http';
import { RegistrarUsuarioComponent } from './registros/registrar-usuario/registrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { ListaCursosComponent } from './lista/lista-cursos/lista-cursos.component';
import { RegistrarCursosComponent } from './registros/registrar-cursos/registrar-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ListaCursosComponent,
    RegistrarCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
