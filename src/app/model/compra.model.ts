import { Carrinho } from './carrinho.model';

export class Compra {
    codigo : number;
	carrinho : Carrinho;
	desconto : number;
	valorcomdesconto : number;
	dt_compra : Date;
}