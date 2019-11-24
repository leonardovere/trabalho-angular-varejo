import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from '../../services/notificacao.service';
import { CompraService } from '../../services/compra.service';
import { NotaService } from '../../services/nota.service';
import { Compra } from '../../model/compra.model';
import { Nota } from '../../model/nota.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialogo-alterar-nota',
  templateUrl: './dialogo-alterar-nota.component.html',
  styleUrls: ['./dialogo-alterar-nota.component.css']
})
export class DialogoAlterarNotaComponent implements OnInit {

  nota: Nota = new Nota();
  compras: Compra[];

  selecionado: Compra;

  constructor(
    private notaService: NotaService,
    private compraService: CompraService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoAlterarNotaComponent>) {}

  cancelar() {
    this.dialogoReferencia.close();
  }

  alterar() {
    this.notaService.alterarNota(this.nota).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível alterar o nota!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.nota = this.dialogoReferencia._containerInstance._config.data;
    this.selecionado = this.nota.codCompra;
    this.listarNotas();
  }

  listarNotas() {
    this.compraService.listarCompras().subscribe(
      dados => {
        if (dados.length === 0) {
          this.notificacaoService.mostrarMensagem('A lista de compras está vazia!', 'OK', 3000);
        } else {
          this.compras = dados;
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar as compras!', 'OK', 3000);
        console.error(error);
      }
    );
  }

}
