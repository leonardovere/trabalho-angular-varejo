import { Pessoa } from './../model/pessoa.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(pessoa: Pessoa): Observable<Pessoa> {
        return this.httpClient.post<Pessoa>(
            `${this.apiUrl}pessoas`, pessoa);
    }

    deletar(codigo: number): Observable<Pessoa> {
        return this.httpClient.delete<Pessoa>(
        `${this.apiUrl}pessoas/${codigo}`);
    }

    listarPessoas(): Observable<Pessoa[]> {
        return this.httpClient.get<Pessoa[]>(
        `${this.apiUrl}pessoas`);
    }
}