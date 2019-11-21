import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPagamentoCompraPageComponent } from './dialogo-pagamento-compra-page.component';

describe('DialogoPagamentoCompraPageComponent', () => {
  let component: DialogoPagamentoCompraPageComponent;
  let fixture: ComponentFixture<DialogoPagamentoCompraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoPagamentoCompraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoPagamentoCompraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
