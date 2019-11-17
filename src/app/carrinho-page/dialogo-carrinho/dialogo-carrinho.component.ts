import { ProdutoCarrinhoService } from './../../services/produto-carrinho.service';
import { ProdutoCarrinho } from './../../model/ProdutoCarrinho.model';
import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { PessoaService } from './../../services/pessoa.service';
import { CarrinhoService } from './../../services/carrinho.service';
import { Carrinho } from './../../model/carrinho.model';
import { Pessoa } from './../../model/pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogo-carrinho',
  templateUrl: './dialogo-carrinho.component.html',
  styleUrls: ['./dialogo-carrinho.component.css']
})
export class DialogoCarrinhoComponent implements OnInit {

  carrinho: Carrinho = new Carrinho();
  pessoas: Pessoa[];

  produtoCarrinho: ProdutoCarrinho = new ProdutoCarrinho();

  constructor(
    private produtoCarrinhoService: ProdutoCarrinhoService,
    private carrinhoService: CarrinhoService,
    private pessoaService: PessoaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoCarrinhoComponent>) {

  }

  cancelar() {
    this.dialogoReferencia.close();
  }

  salvar() {
    this.carrinhoService.salvar(this.carrinho).subscribe(
      dados => {
        this.produtoCarrinho.carrinho = dados;
        this.produtoCarrinhoService.salvar(this.produtoCarrinho).subscribe(
          success => {
            this.notificacaoService.mostrarMensagem('Carrinho salvo com sucesso !', 'OK', 3000);
          },
          error => {
            console.error(error);
          }
        );
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível salvar o carrinho!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.listarPessoas();
  }

  listarPessoas() {
    this.pessoaService.listarPessoas().subscribe(
      dados => {
        if (dados.length === 0) {
          this.notificacaoService.mostrarMensagem('A lista de pessoas está vazia!', 'OK', 3000);
        } else {
          this.pessoas = dados;
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar as pessoas!', 'OK', 3000);
        console.error(error);
      }
    );
  }

}
