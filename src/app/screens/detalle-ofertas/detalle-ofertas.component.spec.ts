import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOfertasComponent } from './detalle-ofertas.component';

describe('DetalleOfertasComponent', () => {
  let component: DetalleOfertasComponent;
  let fixture: ComponentFixture<DetalleOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOfertasComponent]
    });
    fixture = TestBed.createComponent(DetalleOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
