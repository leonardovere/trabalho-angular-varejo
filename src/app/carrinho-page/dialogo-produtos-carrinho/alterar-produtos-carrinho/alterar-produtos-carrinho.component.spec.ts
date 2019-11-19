import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarProdutosCarrinhoComponent } from './alterar-produtos-carrinho.component';

describe('AlterarProdutosCarrinhoComponent', () => {
  let component: AlterarProdutosCarrinhoComponent;
  let fixture: ComponentFixture<AlterarProdutosCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarProdutosCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
