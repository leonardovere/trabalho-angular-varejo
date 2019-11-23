import { MatDialogRef, MatOption } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { CarrinhoService } from './../../services/carrinho.service';
import { CompraService } from './../../services/compra.service';
import { Compra } from './../../model/compra.model';
import { Carrinho } from './../../model/carrinho.model';
import { Component, OnInit } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-dialogo-compra',
  templateUrl: './dialogo-compra.component.html',
  styleUrls: ['./dialogo-compra.component.css']
})
export class DialogoCompraComponent implements OnInit {

  compra: Compra = new Compra();
  carrinhos: Carrinho[];

  constructor(
    private compraService: CompraService,
    private carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoCompraComponent>) {

  }

  cancelar() {
    this.dialogoReferencia.close();
  }

  salvar() {
    if(this.compra.desconto != null){
      this.compra.valorComDesconto = this.compra.compraCarrinho.valorTotal - this.compra.desconto;
    }else{
      this.compra.valorComDesconto = this.compra.compraCarrinho.valorTotal;
    }
    
    this.compraService.salvar(this.compra).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível salvar a compra!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
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
        this.notificacaoService.mostrarMensagem('Não foi possível listar os carrinhos!', 'OK', 3000);
        console.error(error);
      }
    );
  }

}
