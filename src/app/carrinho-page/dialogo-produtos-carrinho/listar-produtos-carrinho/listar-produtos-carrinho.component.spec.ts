import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosCarrinhoComponent } from './listar-produtos-carrinho.component';

describe('ListarProdutosCarrinhoComponent', () => {
  let component: ListarProdutosCarrinhoComponent;
  let fixture: ComponentFixture<ListarProdutosCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProdutosCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProdutosCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
