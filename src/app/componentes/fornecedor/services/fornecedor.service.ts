import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginacaoConsulta } from '../../util/paginacaoConsulta';
import { FornecedorResponse } from '../models/fornecedorResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }
  protected API: string =  'http://localhost:5151/api/Fornecedores';
  
  recuperarFornecedores(params: HttpParams) {
    return this.http.get<PaginacaoConsulta<FornecedorResponse>>(
      this.API,
      { params }
    );
  }
  cadastrarFornecedor(fornecedor: FornecedorResponse): Observable<FornecedorResponse> {
      return this.http.post<FornecedorResponse>(this.API, fornecedor)
  }
}
