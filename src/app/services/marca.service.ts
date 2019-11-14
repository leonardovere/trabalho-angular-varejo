import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../model/marca.model';

@Injectable()
export class MarcaService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(marca: Marca): Observable<Marca> {
        return this.httpClient.post<Marca>(
            `${this.apiUrl}marcas`, marca);
    }

    deletar(codigo: number): Observable<Marca> {
        return this.httpClient.delete<Marca>(
        `${this.apiUrl}marcas/${codigo}`);
    }

    listarMarcas(): Observable<Marca[]> {
        return this.httpClient.get<Marca[]>(
        `${this.apiUrl}marcas`);
    }
}