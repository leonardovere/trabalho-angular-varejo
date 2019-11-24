import { DialogoNotaComponent } from './dialogo-nota/dialogo-nota.component';
import { NotaService } from './../services/nota.service';
import { Nota } from './../model/nota.model';
import { NotificacaoService } from './../services/notificacao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogoAlterarNotaComponent } from './dialogo-alterar-nota/dialogo-alterar-nota.component';

@Component({
  selector: 'app-nota-page',
  templateUrl: './nota-page.component.html',
  styleUrls: ['./nota-page.component.css']
})
export class NotaPageComponent implements OnInit {

  notas: Nota[];

	constructor(
		private notaService: NotaService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarNotas();
	}

	listarNotas() {

		this.notaService.listarNotas().subscribe(res => {
			this.notas = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar as Notas!",
				"OK",
				3000);
		});
	}

	remover(nota: Nota): void {
		this.notaService.deletar(nota.codigo).subscribe(
			res => {
				this.listarNotas();
				this.notificacaoService.mostrarMensagem(
					"Nota foi deletada com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar a Nota!",
					"OK",
					3000
				);
			});
	}

	novaNota() {
		this.dialogo.open(DialogoNotaComponent, {data: new Nota}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.notas.push(result);
				this.notificacaoService.mostrarMensagem(
					"Nota salva com sucesso!",
					"OK", 3000
				);
			}
		}, () => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar a Nota!",
				"OK", 3000
			);
		});
	}

	alterarNota(nota: Nota) {
		this.dialogo.open(DialogoAlterarNotaComponent, {data: nota}).afterClosed()
		.subscribe(
		  dados => {
			if (dados) {
			  this.listarNotas();
			  this.notificacaoService.mostrarMensagem('Nota alterado com sucesso!', 'OK', 3000);
			}
		  },
		  error => {
			this.notificacaoService.mostrarMensagem('Não foi possível alterar o nota!', 'OK', 3000);
			console.error(error);
		  }
		);
	  }
}
