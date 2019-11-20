import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoPageComponent } from './pagamento-page.component';

describe('PagamentoPageComponent', () => {
  let component: PagamentoPageComponent;
  let fixture: ComponentFixture<PagamentoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
