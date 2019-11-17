import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { PessoaService } from './../../services/pessoa.service';
import { CarrinhoService } from './../../services/carrinho.service';
import { Pessoa } from './../../model/pessoa.model';
import { Carrinho } from './../../model/carrinho.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogo-alterar-carrinho',
  templateUrl: './dialogo-alterar-carrinho.component.html',
  styleUrls: ['./dialogo-alterar-carrinho.component.css']
})
export class DialogoAlterarCarrinhoComponent implements OnInit {

  carrinho: Carrinho = new Carrinho();
  pessoas: Pessoa[];

  selecionado: Pessoa;

  constructor(
    private carrinhoService: CarrinhoService,
    private pessoaService: PessoaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoAlterarCarrinhoComponent>) {}

  cancelar() {
    this.dialogoReferencia.close();
  }

  alterar() {
    this.carrinhoService.alterarCarrinho(this.carrinho).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível alterar o carrinho!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.carrinho = this.dialogoReferencia._containerInstance._config.data;
    this.selecionado = this.carrinho.pessoa;
    this.listarMarcas();
  }

  listarMarcas() {
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
