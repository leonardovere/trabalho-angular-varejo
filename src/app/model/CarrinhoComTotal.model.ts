import { Pessoa } from './pessoa.model';
import { Carrinho } from './carrinho.model';

export class CarrinhoComtotal {
  codigo: number;
  pessoa: Pessoa;
  valorTotal: number;
  totalProdutos: number;
}
