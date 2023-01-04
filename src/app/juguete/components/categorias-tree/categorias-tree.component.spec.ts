import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasTreeComponent } from './categorias-tree.component';

describe('CategoriasTreeComponent', () => {
  let component: CategoriasTreeComponent;
  let fixture: ComponentFixture<CategoriasTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
