import { Produto } from './produto.model';
import { Carrinho } from './carrinho.model';

export class ProdutoCarrinho {
  codigo: number;
  carrinho: Carrinho;
  produto: Produto;
  quantidade: number;
  valorTotal: number;
}
