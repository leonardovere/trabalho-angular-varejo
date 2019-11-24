import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagem } from '../model/imagem.model';

@Injectable()
export class ImagemService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(marca: Imagem): Observable<Imagem> {
        return this.httpClient.post<Imagem>(
            `${this.apiUrl}imagens`, Imagem);
    }

    deletar(codigo: number): Observable<Imagem> {
        return this.httpClient.delete<Imagem>(
        `${this.apiUrl}imagens/${codigo}`);
    }

    listarImagens(): Observable<Imagem[]> {
        return this.httpClient.get<Imagem[]>(
        `${this.apiUrl}imagens`);
    }
}