import { MatDialogRef, MatOption } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { CompraService } from './../../services/compra.service';
import { NotaService } from './../../services/nota.service';
import { Nota } from './../../model/nota.model';
import { Compra } from './../../model/compra.model';
import { Component, OnInit } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-dialogo-nota',
  templateUrl: './dialogo-nota.component.html',
  styleUrls: ['./dialogo-nota.component.css']
})
export class DialogoNotaComponent implements OnInit {

  nota: Nota = new Nota();
  notas: Compra[];

  constructor(
    private notaService: NotaService,
    private compraService: CompraService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoNotaComponent>) {

  }

  cancelar() {
    this.dialogoReferencia.close();
  }

  salvar() {
    this.notaService.salvar(this.nota).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível salvar a nota!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.listarCompras();
  }

  listarCompras() {
    this.compraService.listarCompras().subscribe(
      dados => {
        if (dados.length === 0) {
          this.notificacaoService.mostrarMensagem('A lista de notas está vazia!', 'OK', 3000);
        } else {
          this.notas = dados;
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar os notas!', 'OK', 3000);
        console.error(error);
      }
    );
  }

}
