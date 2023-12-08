import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCursosComponent } from './registrar-cursos.component';

describe('RegistrarCursosComponent', () => {
  let component: RegistrarCursosComponent;
  let fixture: ComponentFixture<RegistrarCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarCursosComponent]
    });
    fixture = TestBed.createComponent(RegistrarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
