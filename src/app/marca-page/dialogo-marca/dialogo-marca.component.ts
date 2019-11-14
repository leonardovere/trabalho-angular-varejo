import { NotificacaoService } from '../../services/notificacao.service';
import { MarcaService } from '../../services/marca.service';
import { Marca } from './../../model/marca.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogo-marca',
  templateUrl: './dialogo-marca.component.html',
  styleUrls: ['./dialogo-marca.component.css']
})
export class DialogoMarcaComponent {

  marca: Marca = new Marca();

  constructor(
    private marcaService: MarcaService,
    private notificacaoService: NotificacaoService,
    private dialogoReferencia: MatDialogRef<DialogoMarcaComponent>

  ) { }

  cancelar(){
    this.dialogoReferencia.close();

  }

  salvar(){
    this.marcaService.salvar(this.marca).subscribe(res =>
      {
        this.dialogoReferencia.close(res);

      }, () => {
        this.notificacaoService.mostrarMensagem(
          "Não foi possivel salvar a marca!",
          "OK", 
          3000
        );

      }
      
      );
  }
}
