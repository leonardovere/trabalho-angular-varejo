import { Pagamento } from './pagamento.model';

export class PagamentoCompra {
    codigo: number;
    //compra: Compra;
    pagamento: Pagamento;
    numCartao: number;
    numBoleto: number;
    agencia: number;
    vezes: number;
    dtEmissao: Date;
    dtVencimento: Date;

}