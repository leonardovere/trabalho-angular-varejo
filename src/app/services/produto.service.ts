import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './../model/produto.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {}

    salvar(produto: Produto): Observable<Produto> {
      return this.httpClient.post<Produto>(`${this.apiUrl}produtos`, produto);
    }

    deletar(codigo: number): Observable<Produto> {
      return this.httpClient.delete<Produto>(`${this.apiUrl}produtos/${codigo}`);
    }

    listarProdutos(): Observable<Produto[]> {
      return this.httpClient.get<Produto[]>(`${this.apiUrl}produtos`);
    }

    alterarProduto(produto: Produto): Observable<Produto> {
      return this.httpClient.put<Produto>(`${this.apiUrl}produtos/${produto.codigo}`, produto);
    }
}
