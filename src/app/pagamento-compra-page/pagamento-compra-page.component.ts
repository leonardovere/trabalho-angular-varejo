import { Component, OnInit } from '@angular/core';
import { PagamentoCompra } from '../model/pagamentoCompra.model';
import { PagamentoCompraService } from '../services/pagamento-compra.service';
import { NotificacaoService } from '../services/notificacao.service';
import { MatDialog } from '@angular/material';
import { DialogoPagamentoCompraPageComponent } from './dialogo-pagamento-compra-page/dialogo-pagamento-compra-page.component';

@Component({
  selector: 'app-pagamento-compra-page',
  templateUrl: './pagamento-compra-page.component.html',
  styleUrls: ['./pagamento-compra-page.component.css']
})
export class PagamentoCompraPageComponent implements OnInit {

  pagamentoCompra: PagamentoCompra[];

	constructor(
		private pagamentoCompraService: PagamentoCompraService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarPagamentoCompra();
	}

	listarPagamentoCompra() {

		this.pagamentoCompraService.listarPagamentoCompras().subscribe(res => {
			this.pagamentoCompra = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar os Pagamentos e as Compras!",
				"OK",
				3000);
		});
	}

	remover(pagamentoCompra: PagamentoCompra): void {
		this.pagamentoCompraService.deletar(pagamentoCompra.codigo).subscribe(
			res => {
				this.listarPagamentoCompra();
				this.notificacaoService.mostrarMensagem(
					"Pagamento e compra deletados com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar o Pagamento e a Compra!",
					"OK",
					3000
				);
			});
	}

	novoPagamentoCompra() {
		this.dialogo.open(DialogoPagamentoCompraPageComponent, {data: new PagamentoCompra}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.pagamentoCompra.push(result);
				this.notificacaoService.mostrarMensagem(
					"Pagamento e Compra salvos com sucesso!",
					"OK", 3000
				);
			}
		}, () => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar!",
				"OK", 3000
			);
		});
	}
}
