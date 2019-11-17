import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoProdutosCarrinhoComponent } from './dialogo-produtos-carrinho.component';

describe('DialogoProdutosCarrinhoComponent', () => {
  let component: DialogoProdutosCarrinhoComponent;
  let fixture: ComponentFixture<DialogoProdutosCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoProdutosCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
