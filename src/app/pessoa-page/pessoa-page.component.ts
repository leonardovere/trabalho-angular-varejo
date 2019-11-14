import { DialogoPessoaComponent } from './dialogo-pessoa/dialogo-pessoa.component';
import { PessoaService } from './../services/pessoa.service';
import { Pessoa } from './../model/pessoa.model';
import { NotificacaoService } from './../services/notificacao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pessoa-page',
  templateUrl: './pessoa-page.component.html',
  styleUrls: ['./pessoa-page.component.css']
})
export class PessoaPageComponent implements OnInit {

  pessoas: Pessoa[];

	constructor(
		private pessoaService: PessoaService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarPessoas();
	}

	listarPessoas() {

		this.pessoaService.listarPessoas().subscribe(res => {
			this.pessoas = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar as pessoas!",
				"OK",
				3000);
		});
	}

	remover(pessoa: Pessoa): void {
		this.pessoaService.deletar(pessoa.codigo).subscribe(
			res => {
				this.listarPessoas();
				this.notificacaoService.mostrarMensagem(
					"Pessoa foi deletada com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar a Pessoa!",
					"OK",
					3000
				);
			});
	}

	novaPessoa() {
		this.dialogo.open(DialogoPessoaComponent, {data: new Pessoa}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.pessoas.push(result);
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
