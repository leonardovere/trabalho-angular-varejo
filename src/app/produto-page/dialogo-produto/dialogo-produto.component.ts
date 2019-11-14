import { MarcaService } from './../../services/marca.service';
import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { ProdutoService } from './../../services/produto.service';
import { Marca } from './../../model/marca.model';
import { Produto } from './../../model/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogo-produto',
  templateUrl: './dialogo-produto.component.html',
  styleUrls: ['./dialogo-produto.component.css']
})
export class DialogoProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  marcas: Marca[];

  constructor(
    private produtoService: ProdutoService,
    private marcaService: MarcaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoProdutoComponent>) {

  }

  cancelar() {
    this.dialogoReferencia.close();
  }

  salvar() {
    this.produtoService.salvar(this.produto).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível salvar o produto!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.listarMarcas();
  }

  listarMarcas() {
    this.marcaService.listarMarcas().subscribe(
      dados => {
        if (dados.length === 0) {
          this.notificacaoService.mostrarMensagem('A lista de marcas está vazia!', 'OK', 3000);
        } else {
          this.marcas = dados;
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar as marcas!', 'OK', 3000);
        console.error(error);
      }
    );
  }

}
