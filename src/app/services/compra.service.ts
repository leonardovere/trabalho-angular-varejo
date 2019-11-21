import { Compra } from '../model/compra.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CompraService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(compra: Compra): Observable<Compra> {
        return this.httpClient.post<Compra>(
            `${this.apiUrl}compras`, compra);   
    }

    deletar(codigo: number): Observable<Compra> {
        return this.httpClient.delete<Compra>(
        `${this.apiUrl}compras/${codigo}`);
    }

    listarCompras(): Observable<Compra[]> {
        return this.httpClient.get<Compra[]>(
        `${this.apiUrl}compras`);
    }
}