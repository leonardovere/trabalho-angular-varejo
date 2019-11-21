import { CarrinhoService } from './../../../services/carrinho.service';
import { ProdutoCarrinho } from './../../../model/ProdutoCarrinho.model';
import { MatDialogRef } from '@angular/material';
import { Carrinho } from '../../../model/carrinho.model';
import { NotificacaoService } from '../../../services/notificacao.service';
import { ProdutoCarrinhoService } from '../../../services/produto-carrinho.service';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../model/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-produtos-ao-carrinho',
  templateUrl: './adicionar-produtos-ao-carrinho.component.html',
  styleUrls: ['./adicionar-produtos-ao-carrinho.component.css']
})
export class AdicionarProdutosAoCarrinhoComponent implements OnInit {

  carrinhoSelecionado: Carrinho = new Carrinho();
  produtoCarrinho: ProdutoCarrinho = new ProdutoCarrinho();
  produtos: Produto[];

  // tslint:disable-next-line: max-line-length
  constructor(private produtoService: ProdutoService, private produtoCarrinhoService: ProdutoCarrinhoService, private notificacaoService: NotificacaoService, private carrinhoService: CarrinhoService, private dialogoReferencia: MatDialogRef<AdicionarProdutosAoCarrinhoComponent>) { }

  listarProdutos() {
    this.produtoService.listarProdutos().subscribe(
      dados => {
        this.produtos = dados;
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar os produtos!', 'OK', 3000);
      }
    );
  }

  adicionarProduto() {
    this.produtoCarrinho.valorTotal = Number(this.produtoCarrinho.produto.preco * this.produtoCarrinho.quantidade);
    this.produtoCarrinho.carrinho.valorTotal += Number(this.produtoCarrinho.valorTotal);
    this.carrinhoService.alterarValorTotal(this.produtoCarrinho.carrinho).subscribe(
      dados => {
        console.log(`Valor total atualizado para: ${dados.valorTotal}`);
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível alterar valor total do carrinho!', 'OK', 3000);
        console.error(error);
      }
    );
    this.produtoCarrinhoService.salvar(this.produtoCarrinho).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível adicionar o produto!', 'OK', 3000);
        console.error(error);
      }
    );
    this.apagar();
  }

  apagar() {
    this.produtoCarrinho = new ProdutoCarrinho();
    this.produtoCarrinho.carrinho = this.carrinhoSelecionado;
  }

  ngOnInit() {
    this.carrinhoSelecionado = this.dialogoReferencia._containerInstance._config.data;
    this.produtoCarrinho.carrinho = this.carrinhoSelecionado;
    console.log(this.produtoCarrinho);
    this.listarProdutos();
  }


}
