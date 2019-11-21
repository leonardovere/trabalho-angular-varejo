import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/model/nota.model';
import { NotaService } from 'src/app/services/nota.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogo-nota',
  templateUrl: './dialogo-nota.component.html',
  styleUrls: ['./dialogo-nota.component.css']
})
export class DialogoNotaComponent {

  nota: Nota = new Nota();
  
  constructor(
    private notaService: NotaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoNotaComponent>

  ){}

  cancelar(){
    this.dialogoReferencia.close();

  }

  salvar(){
    this.notaService.salvar(this.nota).subscribe(res =>
      {
        this.dialogoReferencia.close(res);

      }, () => {
        this.notificacaoService.mostrarMensagem(
          "Não foi possivel salvar a nota!",
          "OK", 
          3000
        );

      }
      
      );
  }
}
