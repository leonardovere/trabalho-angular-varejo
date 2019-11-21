import { Component } from '@angular/core';
import { PagamentoCompra } from 'src/app/model/pagamentoCompra.model';
import { PagamentoCompraService } from 'src/app/services/pagamento-compra.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialogo-pagamento-compra-page',
  templateUrl: './dialogo-pagamento-compra-page.component.html',
  styleUrls: ['./dialogo-pagamento-compra-page.component.css']
})
export class DialogoPagamentoCompraPageComponent {

  pagamentoCompras: PagamentoCompra[];

	constructor(
		private pagamentoCompraService: PagamentoCompraService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }



	listarPagamentoCompra() {

		this.pagamentoCompraService.listarPagamentoCompra().subscribe(res => {
			this.pagamentoCompras = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar os pagamento e compras!",
				"OK", 
				3000);
		});
	}

	remover(pagamentoCompra: PagamentoCompra): void {
		this.pagamentoCompraService.deletar(pagamentoCompra.codigo).subscribe(
			res => {
				this.listarPagamentoCompra();
				this.notificacaoService.mostrarMensagem(
					"Pagamento e compra foi deletado com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar!",
					"OK",
					3000
				);
			});
	}

	novoPagamentoCompra() {

		this.dialogo.open(DialogoPagamentoCompraPageComponent, {data: new PagamentoCompra}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.pagamentoCompras.push(result);
				this.notificacaoService.mostrarMensagem(
					"Salvo com sucesso!", 
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
