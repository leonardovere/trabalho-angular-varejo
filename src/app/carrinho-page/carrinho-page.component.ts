import { ProdutoCarrinhoService } from './../services/produto-carrinho.service';
import { ProdutoService } from './../services/produto.service';
import { CarrinhoService } from './../services/carrinho.service';
import { Carrinho } from './../model/carrinho.model';
import { DialogoAlterarCarrinhoComponent } from './dialogo-alterar-carrinho/dialogo-alterar-carrinho.component';
import { DialogoCarrinhoComponent } from './dialogo-carrinho/dialogo-carrinho.component';
import { MatDialog } from '@angular/material';
import { NotificacaoService } from './../services/notificacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.css']
})
export class CarrinhoPageComponent implements OnInit {

  carrinhos: Carrinho[];

	constructor(
		private produtoCarrinhoService: ProdutoCarrinhoService,
    	private produtoService: ProdutoService,
    	private carrinhoService: CarrinhoService,
		private notificacaoService: NotificacaoService,
		private dialogo: MatDialog
	) { }

	listarCarrinhos() {
		this.carrinhoService.listarCarrinhos().subscribe(
    res => {
      this.carrinhos = res;
      for (let i = 0; i < this.carrinhos.length; i++) {
        this.produtoService.retornarQuantidadeProdutos(this.carrinhos[i]).subscribe(
          dados => {
            this.carrinhos[i].totalProdutos = Number(dados);
          },
          error => {
            console.error(error);
          }
        );
      }
		}, err => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possível buscar os carrinhos!",
				"OK",
				3000);
		});
	}

	remover(carrinho: Carrinho): void {
		this.carrinhoService.deletar(carrinho.codigo).subscribe(
			res => {
				this.listarCarrinhos();
				this.notificacaoService.mostrarMensagem(
					"Carrinho foi deletado com sucesso!",
					"OK",
					3000
				);
			}, err => {
				this.notificacaoService.mostrarMensagem(
					"Não foi possível deletar o carrinho!",
					"OK",
					3000
				);
			});
	}

	novoCarrinho() {
		this.dialogo.open(DialogoCarrinhoComponent, {data: new Carrinho}).afterClosed()
		.subscribe(result => {
			if (result) {
				this.carrinhos.push(result);
				this.notificacaoService.mostrarMensagem(
					"Carrinho salvo com sucesso!",
					"OK", 3000
				);

			}

		}, error => {
			this.notificacaoService.mostrarMensagem(
				"Não foi possivel salvar o carrinho!",
				"OK", 3000
      );
      console.error(error);
		});

  }

  alterarCarrinho(carrinho: Carrinho) {
    this.dialogo.open(DialogoAlterarCarrinhoComponent, {data: carrinho}).afterClosed()
    .subscribe(
      dados => {
        if (dados) {
          this.listarCarrinhos();
          this.notificacaoService.mostrarMensagem('Carrinho alterado com sucesso!', 'OK', 3000);
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível alterar o carrinho!', 'OK', 3000);
        console.error(error);
      }
    );
  }

  produtosDoCarrinho(carrinho: Carrinho) {

  }

	ngOnInit() {
		this.listarCarrinhos();
	}

}
