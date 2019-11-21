import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/model/compra.model';
import { CompraService } from 'src/app/services/compra.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogo-compra',
  templateUrl: './dialogo-compra.component.html',
  styleUrls: ['./dialogo-compra.component.css']
})
export class DialogoCompraComponent {
  
    compra: Compra = new Compra();
  
    constructor(
      private compraService: CompraService,
      private notificacaoService: NotificacaoService,
      private dialogoReferencia: MatDialogRef<DialogoCompraComponent>
  
    ){}
  
    cancelar(){
      this.dialogoReferencia.close();
  
    }
  
    salvar(){
      this.compraService.salvar(this.compra).subscribe(res =>
        {
          this.dialogoReferencia.close(res);
  
        }, () => {
          this.notificacaoService.mostrarMensagem(
            "Não foi possivel salvar a compra!",
            "OK", 
            3000
          );
  
        }
        
        );
    }
  }
