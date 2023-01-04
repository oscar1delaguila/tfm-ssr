import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaBlogComponent } from './experiencia-blog.component';

describe('ExperienciaBlogComponent', () => {
  let component: ExperienciaBlogComponent;
  let fixture: ComponentFixture<ExperienciaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
