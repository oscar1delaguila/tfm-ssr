import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaListadoComponent } from './experiencia-listado.component';

describe('ExperienciaListadoComponent', () => {
  let component: ExperienciaListadoComponent;
  let fixture: ComponentFixture<ExperienciaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
