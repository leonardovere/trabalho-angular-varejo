import { Marca } from './marca.model';

export class Produto {
  codigo: number;
  nome: string;
  marca: Marca;
  preco: number;
  precoCusto: number;
  quantidadeEstoque: number;
  ncm: number;
  codigoBarra: number;
}
