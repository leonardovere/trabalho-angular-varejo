import { DialogoAlterarProdutoComponent } from './dialogo-alterar-produto/dialogo-alterar-produto.component';
import { ProdutoService } from './../services/produto.service';
import { Produto } from './../model/produto.model';
import { DialogoProdutoComponent } from './dialogo-produto/dialogo-produto.component';
import { MatDialog } from '@angular/material';
import { NotificacaoService } from './../services/notificacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css']
})
export class ProdutoPageComponent implements OnInit {

  produtos: Produto[];

	constructor(
		private produtoService: ProdutoService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	ngOnInit() {
		this.listarProdutos();
	}

	listarProdutos() {
		this.produtoService.listarProdutos().subscribe(
      res => {
			  this.produtos = res;
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar os produtos!",
				"OK",
				3000);
		});
	}

	remover(produto: Produto): void {
		this.produtoService.deletar(produto.codigo).subscribe(
			res => {
				this.listarProdutos();
				this.notificacaoService.mostrarMensagem(
					"Produto foi deletado com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar o produto!",
					"OK",
					3000
				);
			});
	}

	novoProduto() {
		this.dialogo.open(DialogoProdutoComponent, {data: new Produto}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.produtos.push(result);
				this.notificacaoService.mostrarMensagem(
					"Produto salvo com sucesso!",
					"OK", 3000
				);

			}

		}, error => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar a marca!",
				"OK", 3000
      );
      console.error(error);
		});

  }

  receberProduto(produto: Produto) {
    return produto;
  }

  alterarProduto(produto: Produto) {
    this.dialogo.open(DialogoAlterarProdutoComponent, {data: produto}).afterClosed()
    .subscribe(
      dados => {
        if (dados) {
          this.listarProdutos();
          this.notificacaoService.mostrarMensagem('Produto alterado com sucesso!', 'OK', 3000);
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível alterar o produto!', 'OK', 3000);
        console.error(error);
      }
    );
  }


}
