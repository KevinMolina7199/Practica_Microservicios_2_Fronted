import { Component,OnInit } from '@angular/core';
import { Cursos } from 'src/app/clases/cursos';
import { CursosService } from 'src/app/services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {
  cursos: Cursos[];

  constructor(private cursoService: CursosService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerCursos();

  }
  private obtenerCursos() {
    this.cursoService.obtenerListaCursos().subscribe(dato => {
      this.cursos = dato;
    })
  }

  eliminarCurso(id: number) {
    this.cursoService.eliminarCurso(id).subscribe(dato => {
      this.obtenerCursos();
    });
  }
}
