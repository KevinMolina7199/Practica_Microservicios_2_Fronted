import { Component,OnInit } from '@angular/core';
import { Cursos } from 'src/app/clases/cursos';
import { CursosService } from 'src/app/services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cursos',
  templateUrl: './registrar-cursos.component.html',
  styleUrls: ['./registrar-cursos.component.scss']
})
export class RegistrarCursosComponent implements OnInit{
  curso: Cursos=new Cursos();

  constructor(private cursoServicio: CursosService, private router:Router){}

  ngOnInit(): void {
  
  }

  guardarCurso(){
    this.cursoServicio.registrarCurso(this.curso).subscribe(dato => {
      console.log(dato);
      this.mostrarEnLista();
    },error => console.log(error));
  }
  mostrarEnLista(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    this.guardarCurso();
  }
}
