import { CarrinhoComtotal } from './../model/CarrinhoComTotal.model';
import { AdicionarProdutosAoCarrinhoComponent } from './dialogo-produtos-carrinho/adicionar-produtos-ao-carrinho/adicionar-produtos-ao-carrinho.component';
import { ListarProdutosCarrinhoComponent } from './dialogo-produtos-carrinho/listar-produtos-carrinho/listar-produtos-carrinho.component';
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
  carrinhosComTotal: CarrinhoComtotal[] = [];

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
            let carrinho = new CarrinhoComtotal();
            carrinho.codigo = this.carrinhos[i].codigo;
            carrinho.pessoa = this.carrinhos[i].pessoa;
            carrinho.valorTotal = this.carrinhos[i].valorTotal;
            carrinho.totalProdutos = Number(dados);
            this.carrinhosComTotal.push(carrinho);
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

	remover(carrinhoComTotal: CarrinhoComtotal): void {
    let carrinho = new Carrinho();
    carrinho.codigo = carrinhoComTotal.codigo;
    carrinho.pessoa = carrinhoComTotal.pessoa;
    carrinho.valorTotal = carrinhoComTotal.valorTotal;
		this.carrinhoService.deletar(carrinho.codigo).subscribe(
			res => {
        this.limparLista();
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
        //this.carrinhos.push(result);
        this.carrinhosComTotal.push(result);
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

  alterarCarrinho(carrinhoComTotal: CarrinhoComtotal) {
    let carrinho = new Carrinho();
    carrinho.codigo = carrinhoComTotal.codigo;
    carrinho.pessoa = carrinhoComTotal.pessoa;
    carrinho.valorTotal = carrinhoComTotal.valorTotal;
    this.dialogo.open(DialogoAlterarCarrinhoComponent, {data: carrinho}).afterClosed()
    .subscribe(
      dados => {
        if (dados) {
          this.limparLista();
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

  listarProdutosDoCarrinho(carrinhoComTotal: CarrinhoComtotal) {
    let carrinho = new Carrinho();
    carrinho.codigo = carrinhoComTotal.codigo;
    carrinho.pessoa = carrinhoComTotal.pessoa;
    carrinho.valorTotal = carrinhoComTotal.valorTotal;
    this.dialogo.open(ListarProdutosCarrinhoComponent, {data: carrinho}).afterClosed()
    .subscribe(
      result => {
        if (result) {
          carrinhoComTotal.totalProdutos -= result;
          this.limparLista();
          this.listarCarrinhos();
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Erro ao abrir tela de produtos do carrinho', 'OK', 3000);
        console.error(error);
      }
    );
  }

  adicionarProdutosAoCarrinho(carrinhoComTotal: CarrinhoComtotal) {
    if (carrinhoComTotal.totalProdutos == null) {
      carrinhoComTotal.totalProdutos = 0;
    }
    let carrinho = new Carrinho();
    carrinho.codigo = carrinhoComTotal.codigo;
    carrinho.pessoa = carrinhoComTotal.pessoa;
    carrinho.valorTotal = carrinhoComTotal.valorTotal;
    this.dialogo.open(AdicionarProdutosAoCarrinhoComponent, {data: carrinho}).afterClosed().subscribe(
      dados => {
        if (dados) {
          this.notificacaoService.mostrarMensagem('Produto adicionado ao carrinho !', 'OK', 3000);
          carrinhoComTotal.codigo = carrinho.codigo;
          carrinhoComTotal.pessoa = carrinho.pessoa;
          carrinhoComTotal.valorTotal = carrinho.valorTotal;
          carrinhoComTotal.totalProdutos++;
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível salvar o produto ao carrinho !', 'OK', 3000);
        console.error(error);
      }
    )
  }

  limparLista() {
    for (let i = this.carrinhosComTotal.length; i > 0; i--) {
      this.carrinhosComTotal.pop();
    }
  }

	ngOnInit() {
		this.listarCarrinhos();
	}

}
