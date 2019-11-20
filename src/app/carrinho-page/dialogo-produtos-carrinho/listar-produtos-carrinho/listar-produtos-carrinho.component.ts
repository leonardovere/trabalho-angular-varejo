import { CarrinhoService } from './../../../services/carrinho.service';
import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from '../../../services/notificacao.service';
import { Carrinho } from '../../../model/carrinho.model';
import { ProdutoCarrinhoService } from '../../../services/produto-carrinho.service';
import { ProdutoCarrinho } from '../../../model/ProdutoCarrinho.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-produtos-carrinho',
  templateUrl: './listar-produtos-carrinho.component.html',
  styleUrls: ['./listar-produtos-carrinho.component.css']
})
export class ListarProdutosCarrinhoComponent implements OnInit {

  produtosDoCarrinho: ProdutoCarrinho[] = [];
  carrinhoSelecionado: Carrinho = new Carrinho();
  listaVazia: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(private produtoCarrinhoService: ProdutoCarrinhoService, private carrinhoService: CarrinhoService,private notificacaoService: NotificacaoService, private dialogoReferencia: MatDialogRef<ListarProdutosCarrinhoComponent>) { }

  ngOnInit() {
    this.carrinhoSelecionado = this.dialogoReferencia._containerInstance._config.data;
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoCarrinhoService.buscarProdutosDoCarrinho(this.carrinhoSelecionado).subscribe(
      dados => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < dados.length; i++) {
          if (dados[i].produto != null) {
            this.produtosDoCarrinho.push(dados[i]);
            console.log(`Lista de produtos: ${this.produtosDoCarrinho}`);
            this.listaVazia = true;
          } else {
            this.listaVazia = false;
          }
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar os produtos', 'OK', 3000);
        console.error(error);
      }
    );
  }

  removerProduto(produtoCarrinho: ProdutoCarrinho) {
    produtoCarrinho.carrinho.valorTotal -= produtoCarrinho.valorTotal;
    this.carrinhoService.alterarValorTotal(produtoCarrinho.carrinho).subscribe(
      success => {
        this.produtoCarrinhoService.remover(produtoCarrinho).subscribe(
          success => {
            this.notificacaoService.mostrarMensagem('Produto removido do carrinho!', 'OK', 3000);
            this.limparLista();
            this.listarProdutos();
            this.dialogoReferencia.close(1);
          },
          error => {
            this.notificacaoService.mostrarMensagem('Não foi possível retirar o produto do carrinho', 'OK', 3000);
            console.error(error);
          }
        );
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível atualizar o valor total', 'OK', 3000);
      }
    );
  }

  limparLista() {
    for (let i = this.produtosDoCarrinho.length; i > 0; i--) {
      this.produtosDoCarrinho.pop();
    }
  }
}
