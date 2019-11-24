import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from '../../services/notificacao.service';
import { PessoaService } from '../../services/pessoa.service';
import { CompraService } from '../../services/compra.service';
import { Pessoa } from '../../model/pessoa.model';
import { Compra } from '../../model/compra.model';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/model/carrinho.model';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-dialogo-alterar-compra',
  templateUrl: './dialogo-alterar-compra.component.html',
  styleUrls: ['./dialogo-alterar-compra.component.css']
})
export class DialogoAlterarCompraComponent implements OnInit {

  compra: Compra = new Compra();
  carrinhos: Carrinho[];

  selecionado: Carrinho;

  constructor(
    private compraService: CompraService,
    private carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoAlterarCompraComponent>) {}

  cancelar() {
    this.dialogoReferencia.close();
  }

  alterar() {
    this.compraService.alterarCompra(this.compra).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível alterar o compra!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.compra = this.dialogoReferencia._containerInstance._config.data;
    this.selecionado = this.compra.compraCarrinho;
    this.listarCarrinhos();
  }

  listarCarrinhos() {
    this.carrinhoService.listarCarrinhos().subscribe(
      dados => {
        if (dados.length === 0) {
          this.notificacaoService.mostrarMensagem('A lista de carrinhos está vazia!', 'OK', 3000);
        } else {
          this.carrinhos = dados;
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar as carrinhos!', 'OK', 3000);
        console.error(error);
      }
    );
  }
}