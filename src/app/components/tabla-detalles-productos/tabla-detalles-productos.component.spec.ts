import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDetallesProductosComponent } from './tabla-detalles-productos.component';

describe('TablaDetallesProductosComponent', () => {
  let component: TablaDetallesProductosComponent;
  let fixture: ComponentFixture<TablaDetallesProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaDetallesProductosComponent]
    });
    fixture = TestBed.createComponent(TablaDetallesProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
