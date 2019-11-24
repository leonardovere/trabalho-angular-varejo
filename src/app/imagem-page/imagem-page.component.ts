import { DialogoImagemComponent } from './dialogo-imagem/dialogo-imagem.component';
import { Component, OnInit } from '@angular/core';
import { Imagem } from '../model/imagem.model';
import { ImagemService } from '../services/imagem.service';
import { NotificacaoService } from '../services/notificacao.service';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
	selector: 'app-imagem-page',
	templateUrl: './imagem-page.component.html',
	styleUrls: ['./imagem-page.component.css']
})
export class ImagemPageComponent implements OnInit {

	imagens: Imagem[];

	constructor(
		private imagemService: ImagemService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarImagens();
	}

	listarImagens() {

		this.imagemService.listarImagens().subscribe(res => {
			this.imagens = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar as imagens!",
				"OK", 
				3000);
		});
	}
	remover(imagem: Imagem): void {
		this.imagemService.deletar(imagem.codigo).subscribe(
			res => {
				this.listarImagens();
				this.notificacaoService.mostrarMensagem(
					"Imagem foi deletada com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar a imagem!",
					"OK",
					3000
				);
			});
	}

	novaImagem() {

		this.dialogo.open(DialogoImagemComponent, {data: new Imagem}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.imagens.push(result);
				this.notificacaoService.mostrarMensagem(
					"Imagem salva com sucesso!", 
					"OK", 3000
				);

			}

		}, () => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar a imagem!",
				"OK", 3000
			);
		});
	}
}
