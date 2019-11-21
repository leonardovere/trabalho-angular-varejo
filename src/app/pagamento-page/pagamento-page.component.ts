import { Component, OnInit } from '@angular/core';
import { Pagamento } from '../model/pagamento.model';
import { PagamentoService } from '../services/pagamento.service';
import { NotificacaoService } from '../services/notificacao.service';
import { MatDialog } from '@angular/material';
import { DialogoPagamentoComponent } from './dialogo-pagamento/dialogo-pagamento.component';

@Component({
  selector: 'app-pagamento-page',
  templateUrl: './pagamento-page.component.html',
  styleUrls: ['./pagamento-page.component.css']
})
export class PagamentoPageComponent {

  pagamentos: Pagamento[];

	constructor(
		private pagamentoService: PagamentoService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarPagamentos();
	}

	listarPagamentos() {

		this.pagamentoService.listarPagamentos().subscribe(res => {
			this.pagamentos = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar os pagamentos!",
				"OK",
				3000);
		});
	}

	remover(pagamentos: Pagamento): void {
		this.pagamentoService.deletar(pagamentos.codigo).subscribe(
			res => {
				this.listarPagamentos();
				this.notificacaoService.mostrarMensagem(
					"Pagamento foi deletado com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar o Pagamento!",
					"OK",
					3000
				);
			});
	}

	novoPagamento() {
		this.dialogo.open(DialogoPagamentoComponent, {data: new Pagamento}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.pagamentos.push(result);
				this.notificacaoService.mostrarMensagem(
					"Pagamento salvo com sucesso!",
					"OK", 3000
				);

			}

		}, () => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar o Pagamento!",
				"OK", 3000
			);
		});

	}

}
