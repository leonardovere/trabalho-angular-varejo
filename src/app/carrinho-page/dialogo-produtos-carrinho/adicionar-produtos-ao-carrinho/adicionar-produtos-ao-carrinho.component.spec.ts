import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutosAoCarrinhoComponent } from './adicionar-produtos-ao-carrinho.component';

describe('AdicionarProdutosAoCarrinhoComponent', () => {
  let component: AdicionarProdutosAoCarrinhoComponent;
  let fixture: ComponentFixture<AdicionarProdutosAoCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarProdutosAoCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProdutosAoCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
