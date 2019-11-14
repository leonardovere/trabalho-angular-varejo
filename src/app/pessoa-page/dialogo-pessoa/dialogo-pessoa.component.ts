import { MatDialogRef } from '@angular/material';
import { NotificacaoService } from './../../services/notificacao.service';
import { PessoaService } from './../../services/pessoa.service';
import { Pessoa } from './../../model/pessoa.model';
import { Component, OnInit } from '@angular/core';

export interface Sexos {
  nome: string;
  valor: string;
}

@Component({
  selector: 'app-dialogo-pessoa',
  templateUrl: './dialogo-pessoa.component.html',
  styleUrls: ['./dialogo-pessoa.component.css']
})
export class DialogoPessoaComponent implements OnInit {

  sexos: Sexos[] = [
    {nome: 'Masculino', valor: 'M'},
    {nome: 'Feminino', valor: 'F'}
  ];

  pessoa: Pessoa = new Pessoa();

  esconderSenha: boolean = true;

  constructor(
    private pessoaService: PessoaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoPessoaComponent>) {

  }

  cancelar() {
    this.dialogoReferencia.close();
  }

  salvar() {
    this.pessoaService.salvar(this.pessoa).subscribe(
      dados => {
        this.dialogoReferencia.close(dados);
      },
      error => {
        console.error(error);
        this.notificacaoService.mostrarMensagem('Não foi possível salvar a pessoa!', 'OK', 3000);
      }
    );
  }

  ngOnInit() {

  }

}
