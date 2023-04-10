import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginacaoRequest } from '../util/paginacaoRequest';
import { PaginacaoConsulta } from '../util/paginacaoConsulta';
import { ProdutoResponse } from './produtoResponse';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  protected API: string =  'http://localhost:5151/api/Produtos';
  
  recuperarProdutos(params: HttpParams) {
    return this.http.get<PaginacaoConsulta<ProdutoResponse>>(
      this.API,
      { params }
    );
  }
  cadastrarProduto(produto: ProdutoResponse): Observable<ProdutoResponse> {
      return this.http.post<ProdutoResponse>(this.API, produto)
  }

  excluirProduto(id: number): Observable<ProdutoResponse> {
    const url = `${this.API}/${id}`
    console.log(url)
    return this.http.delete<ProdutoResponse>(url)
  }
  
  editarProduto(produto: ProdutoResponse): Observable<ProdutoResponse> {
    const url = `${this.API}/${produto.codigo}`
    return this.http.put<ProdutoResponse>(url, produto)
  }
  
  buscarProdutoPorId(codigo: number): Observable<any> {
    return this.http.get(`${this.API}/${codigo}`);
  }
}
