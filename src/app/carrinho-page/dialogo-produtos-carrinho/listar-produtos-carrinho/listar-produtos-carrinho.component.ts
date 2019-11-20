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

  produtosDoCarrinho: ProdutoCarrinho[];
  carrinhoSelecionado: Carrinho = new Carrinho();

  // tslint:disable-next-line: max-line-length
  constructor(private produtoCarrinhoService: ProdutoCarrinhoService, private notificacaoService: NotificacaoService, private dialogoReferencia: MatDialogRef<ListarProdutosCarrinhoComponent>) { }

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

  }
}
