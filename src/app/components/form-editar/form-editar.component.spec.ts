import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarComponent } from './form-editar.component';

describe('FormEditarComponent', () => {
  let component: FormEditarComponent;
  let fixture: ComponentFixture<FormEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditarComponent]
    });
    fixture = TestBed.createComponent(FormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
