import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificacaoService {

    constructor(public snackBar: MatSnackBar) {}

    /**
     * @param mensagem -- Mensagem que será mostrada na tela;
     * @param acao     -- Descrição que será mostrada no botão;
     * @param tempo    -- Tempo que a mensagem ficará na tela;
     */
    mostrarMensagem(
        mensagem: string, acao: string, tempo: number
    ) {
        this.snackBar.open(mensagem, acao, {
            duration : tempo
        });
    }

}