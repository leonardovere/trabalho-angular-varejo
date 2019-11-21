import { Observable } from 'rxjs';
import { Carrinho } from './../model/carrinho.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(carrinho: Carrinho): Observable<Carrinho> {
        return this.httpClient.post<Carrinho>(
            `${this.apiUrl}carrinhos`, carrinho);
    }

    deletar(codigo: number): Observable<Carrinho> {
        return this.httpClient.delete<Carrinho>(
        `${this.apiUrl}carrinhos/${codigo}`);
    }

    listarCarrinhos(): Observable<Carrinho[]> {
        return this.httpClient.get<Carrinho[]>(
        `${this.apiUrl}carrinhos`);
    }

    alterarCarrinho(carrinho: Carrinho) {
      return this.httpClient.put<Carrinho>((`${this.apiUrl}carrinhos/${carrinho.codigo}`), carrinho);
    }

    alterarValorTotal(carrinho: Carrinho) {
      return this.httpClient.put<Carrinho>((`${this.apiUrl}carrinhos/alterarValorTotal/${carrinho.codigo}`), carrinho);
    }
}
