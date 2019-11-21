import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/model/pagamento.model';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogo-pagamento',
  templateUrl: './dialogo-pagamento.component.html',
  styleUrls: ['./dialogo-pagamento.component.css']
})
export class DialogoPagamentoComponent implements OnInit {

  pagamento: Pagamento = new Pagamento();


  constructor(
    private pagamentoService: PagamentoService,
    private notificacaoService: NotificacaoService,
    private dialogoPagamento: MatDialogRef<DialogoPagamentoComponent>) {

  }

  cancelar() {
    this.dialogoPagamento.close();
  }

  salvar() {
    this.pagamentoService.salvar(this.pagamento).subscribe(
      dados => {
        this.dialogoPagamento.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível salvar o pagamento!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {
    this.listarPagamentos();
  }

  listarPagamentos() {
    this.pagamentoService.listarPagamentos().subscribe(
      dados => {
        if (dados.length === 0) {
          this.notificacaoService.mostrarMensagem('Não á Pagamentos!', 'OK', 3000);
        } else {
          
        }
      },
      error => {
        this.notificacaoService.mostrarMensagem('Não foi possível listar os pagamentos!', 'OK', 3000);
        console.error(error);
      }
    );
  }

}