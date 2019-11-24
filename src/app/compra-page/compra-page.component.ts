import { DialogoCompraComponent } from './dialogo-compra/dialogo-compra.component';
import { CompraService } from './../services/compra.service';
import { Compra } from './../model/compra.model';
import { NotificacaoService } from './../services/notificacao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogoAlterarCompraComponent } from './dialogo-alterar-compra/dialogo-alterar-compra.component';

@Component({
  selector: 'app-compra-page',
  templateUrl: './compra-page.component.html',
  styleUrls: ['./compra-page.component.css']
})
export class CompraPageComponent implements OnInit {

  compras: Compra[];

	constructor(
		private compraService: CompraService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarCompras();
	}

	listarCompras() {

		this.compraService.listarCompras().subscribe(res => {
			this.compras = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar as Compras!",
				"OK",
				3000);
		});
	}

	remover(compra: Compra): void {
		this.compraService.deletar(compra.codigo).subscribe(
			res => {
				this.listarCompras();
				this.notificacaoService.mostrarMensagem(
					"Compra foi deletada com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar a Compra!",
					"OK",
					3000
				);
			});
	}

	novaCompra() {
		this.dialogo.open(DialogoCompraComponent, {data: new Compra}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.compras.push(result);
				this.notificacaoService.mostrarMensagem(
					"Compra salva com sucesso!",
					"OK", 3000
				);
			}
		}, () => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar a Compra!",
				"OK", 3000
			);
		});
	}

	alterarCompra(compra: Compra) {
		this.dialogo.open(DialogoAlterarCompraComponent, {data: compra}).afterClosed()
		.subscribe(
		  dados => {
			if (dados) {
			  this.listarCompras();
			  this.notificacaoService.mostrarMensagem('Compra alterada com sucesso!', 'OK', 3000);
			}
		  },
		  error => {
			this.notificacaoService.mostrarMensagem('Não foi possível alterar a Compra!', 'OK', 3000);
			console.error(error);
		  }
		);
	  }
}
