import { Carrinho } from './../model/carrinho.model';
import { ProdutoCarrinho } from './../model/ProdutoCarrinho.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCarrinhoService {

  private apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  salvar(produtoCarrinho: ProdutoCarrinho): Observable<ProdutoCarrinho> {
    return this.http.post<ProdutoCarrinho>((`${this.apiUrl}produtosCarrinho`), produtoCarrinho);
  }

  buscarProdutosDoCarrinho(carrinho: Carrinho) {
    return this.http.get<ProdutoCarrinho[]>(`${this.apiUrl}produtosCarrinho/buscarProdutosPorCarrinho/${carrinho.codigo}`);
  }

  remover(produtoCarrinho: ProdutoCarrinho) {
    return this.http.delete<ProdutoCarrinho>((`${this.apiUrl}produtosCarrinho/${produtoCarrinho.codigo}`));
  }

}
