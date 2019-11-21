import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoCompraPageComponent } from './pagamento-compra-page.component';

describe('PagamentoCompraPageComponent', () => {
  let component: PagamentoCompraPageComponent;
  let fixture: ComponentFixture<PagamentoCompraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoCompraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoCompraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
