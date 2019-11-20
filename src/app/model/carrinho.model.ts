import { Pessoa } from './pessoa.model';

export class Carrinho {
  codigo: number;
  pessoa: Pessoa;
  sessao: number;
  valorTotal: number;
  totalProdutos: number;
}
