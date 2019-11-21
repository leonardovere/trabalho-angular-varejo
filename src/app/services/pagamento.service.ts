import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagamento } from '../model/pagamento.model';

@Injectable()
export class PagamentoService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(pagamento: Pagamento): Observable<Pagamento> {
        return this.httpClient.post<Pagamento>(
            `${this.apiUrl}pagamentos`, pagamento);
    }

    deletar(codigo: number): Observable<Pagamento> {
        return this.httpClient.delete<Pagamento>(
        `${this.apiUrl}pagamentos/${codigo}`);
    }

    listarPagamentos(): Observable<Pagamento[]> {
        return this.httpClient.get<Pagamento[]>(
        `${this.apiUrl}pagamentos`);
    }
}