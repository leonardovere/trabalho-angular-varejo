import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPagamentoComponent } from './dialogo-pagamento.component';

describe('DialogoPagamentoComponent', () => {
  let component: DialogoPagamentoComponent;
  let fixture: ComponentFixture<DialogoPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
