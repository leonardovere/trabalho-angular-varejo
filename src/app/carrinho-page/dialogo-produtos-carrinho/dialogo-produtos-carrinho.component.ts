import { ProdutoCarrinho } from './../../model/ProdutoCarrinho.model';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogo-produtos-carrinho',
  templateUrl: './dialogo-produtos-carrinho.component.html',
  styleUrls: ['./dialogo-produtos-carrinho.component.css']
})
export class DialogoProdutosCarrinhoComponent implements OnInit {

  constructor(private dialogoReferencia: MatDialogRef<DialogoProdutosCarrinhoComponent>) { }

  cancelar() {
    this.dialogoReferencia.close();
  }

  ngOnInit() {

  }

}
