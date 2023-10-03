import { PaginacaoResponse } from './../../util/paginacaoConsulta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FornecedorResponse } from '../models/fornecedorResponse';
import { Observable } from 'rxjs';
import { FornecedorRequest } from '../models/fornecedor.request';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }
  protected API: string =  'http://localhost:5151/api/Fornecedores';
  
  recuperarFornecedores(request: FornecedorRequest) : Observable<PaginacaoResponse<FornecedorResponse>> {
    return this.http.get<PaginacaoResponse<FornecedorResponse>>(
      this.API,
      { params: request as {} });
  }
  cadastrarFornecedor(fornecedor: FornecedorRequest): Observable<FornecedorResponse> {
      return this.http.post<FornecedorResponse>(this.API, fornecedor)
  }
}
