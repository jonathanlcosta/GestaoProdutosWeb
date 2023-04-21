import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaginacaoRequest } from '../../../util/paginacaoRequest';
import { PaginacaoConsulta } from '../../../util/paginacaoConsulta';
import { FornecedorResponse } from '../../models/fornecedorResponse';
import { FornecedorService } from '../../services/fornecedor.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent {
form: NgForm;

  paginacaoRequest: PaginacaoRequest = new PaginacaoRequest({});
  fornecedores!: PaginacaoConsulta<FornecedorResponse>;


  constructor(private service: FornecedorService) {
     }


  ngOnInit(): void {
    this.recuperarFornecedores()
  }

  montaQuery(): HttpParams {
    let params = new HttpParams();
    
    params = params.set('pagina', this.paginacaoRequest.pagina);
    this.paginacaoRequest.quantidadeProdutosPorPagina = 9;
    params = params.set('quantidade', this.paginacaoRequest.quantidadeProdutosPorPagina);

    return params;
  }

  
  recuperarFornecedores() {
    this.service.recuperarFornecedores(this.montaQuery()).subscribe(fornecedores => {
      this.fornecedores = fornecedores;
      this.paginacaoRequest.totalRegistros = fornecedores.quantidade;
      this.paginacaoRequest.totalPaginas = Math.ceil(fornecedores.quantidade /
        this.paginacaoRequest.quantidadeProdutosPorPagina);
      console.log(fornecedores);
    });
  }
}
