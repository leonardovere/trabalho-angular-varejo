import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagamentoCompra } from '../model/pagamentoCompra.model';

@Injectable()
export class PagamentoCompraService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(pagamentoCompra: PagamentoCompra): Observable<PagamentoCompra> {
        return this.httpClient.post<PagamentoCompra>(
            `${this.apiUrl}pagamentoCompra`, pagamentoCompra);
    }

    deletar(codigo: number): Observable<PagamentoCompra> {
        return this.httpClient.delete<PagamentoCompra>(
        `${this.apiUrl}pagamentoCompra/${codigo}`);
    }

    listarPagamentoCompra(): Observable<PagamentoCompra[]> {
        return this.httpClient.get<PagamentoCompra[]>(
        `${this.apiUrl}pagamentoCompra`);
    }
}