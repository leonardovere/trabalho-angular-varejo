import { Marca } from './../../model/marca.model';
import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { MarcaService } from './../../services/marca.service';
import { ProdutoService } from './../../services/produto.service';
import { Produto } from './../../model/produto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialogo-alterar-produto',
  templateUrl: './dialogo-alterar-produto.component.html',
  styleUrls: ['./dialogo-alterar-produto.component.css']
})
export class DialogoAlterarProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  marcas: Marca[];

  selecionado: Marca;

  constructor(
    private produtoService: ProdutoService,
    private marcaService: MarcaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoAlterarProdutoComponent>) {}

  cancelar() {
    this.dialogoReferencia.close();
  }

  alterar() {
    this.produtoService.alterarProduto(this.produto).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível alterar o produto!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.produto = this.dialogoReferencia._containerInstance._config.data;
    this.selecionado = this.produto.marca;
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
