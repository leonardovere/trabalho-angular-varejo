import { DialogoMarcaComponent } from './dialogo-marca/dialogo-marca.component';
import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca.model';
import { MarcaService } from '../services/marca.service';
import { NotificacaoService } from '../services/notificacao.service';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
	selector: 'app-marca-page',
	templateUrl: './marca-page.component.html',
	styleUrls: ['./marca-page.component.css']
})
export class MarcaPageComponent implements OnInit {

	marcas: Marca[];

	constructor(
		private marcaService: MarcaService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarMarcas();
	}

	listarMarcas() {

		this.marcaService.listarMarcas().subscribe(res => {
			this.marcas = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar as marcas!",
				"OK", 
				3000);
		});
	}

	remover(marca: Marca): void {
		this.marcaService.deletar(marca.codigo).subscribe(
			res => {
				this.listarMarcas();
				this.notificacaoService.mostrarMensagem(
					"Marca foi deletada com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar a marca!",
					"OK",
					3000
				);
			});
	}

	novaMarca() {

		this.dialogo.open(DialogoMarcaComponent, {data: new Marca}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.marcas.push(result);
				this.notificacaoService.mostrarMensagem(
					"Marca salva com sucesso!", 
					"OK", 3000
				);

			}

		}, () => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar a marca!",
				"OK", 3000
			);
		});

	}


}
