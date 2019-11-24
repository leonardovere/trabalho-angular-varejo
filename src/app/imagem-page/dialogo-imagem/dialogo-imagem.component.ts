import { NotificacaoService } from '../../services/notificacao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Imagem } from 'src/app/model/imagem.model';
import { ImagemService } from 'src/app/services/imagem.service';

@Component({
  selector: 'app-dialogo-imagem',
  templateUrl: './dialogo-imagem.component.html',
  styleUrls: ['./dialogo-imagem.component.css']
})
export class DialogoImagemComponent {

  imagem: Imagem = new Imagem();

  constructor(
    private imagemService: ImagemService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoImagemComponent>

  ) { }

  cancelar(){
    this.dialogoReferencia.close();

  }

  salvar(){
    this.imagemService.salvar(this.imagem).subscribe(res =>
      {
        this.dialogoReferencia.close(res);

      }, () => {
        this.notificacaoService.mostrarMensagem(
          "Não foi possivel salvar a imagem!",
          "OK", 
          3000
        );

      }
      
      );
  }
}