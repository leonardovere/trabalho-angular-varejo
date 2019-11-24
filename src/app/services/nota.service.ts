import { Nota } from './../model/nota.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotaService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(nota: Nota): Observable<Nota> {
        return this.httpClient.post<Nota>(
            `${this.apiUrl}notas`, nota);
    }

    deletar(codigo: number): Observable<Nota> {
        return this.httpClient.delete<Nota>(
        `${this.apiUrl}notas/${codigo}`);
    }

    listarNotas(): Observable<Nota[]> {
        return this.httpClient.get<Nota[]>(
        `${this.apiUrl}notas`);
    }

    alterarNota(nota : Nota) {
        return this.httpClient.put<Nota>(
        (`${this.apiUrl}notas/${nota.codigo}`), nota);
      }
}