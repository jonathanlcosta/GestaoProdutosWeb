import { Component, ViewChild } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { NgForm } from '@angular/forms';
import { PaginacaoRequest } from '../../../util/paginacaoRequest';
import { HttpParams } from '@angular/common/http';
import { ProdutoResponse } from '../../models/produtoResponse';
import { PaginacaoConsulta } from '../../../util/paginacaoConsulta';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent {
form: NgForm;

  paginacaoRequest: PaginacaoRequest = new PaginacaoRequest({});
  produtos!: PaginacaoConsulta<ProdutoResponse>;

  constructor(private service: ProdutoService) {
     }


  ngOnInit(): void {
    this.recuperarProdutos()
  }

  montaQuery(): HttpParams {
    let params = new HttpParams();
    
    params = params.set('pagina', this.paginacaoRequest.pagina);
    this.paginacaoRequest.quantidadeProdutosPorPagina = 9;
    params = params.set('quantidade', this.paginacaoRequest.quantidadeProdutosPorPagina);
   
    return params;
  }

  
  recuperarProdutos() {
    this.service.recuperarProdutos(this.montaQuery()).subscribe(products => {
      this.produtos = products;
      this.paginacaoRequest.totalRegistros = products.quantidade;
      this.paginacaoRequest.totalPaginas = Math.ceil(products.quantidade /
        this.paginacaoRequest.quantidadeProdutosPorPagina);
      console.log(products);
    });
  }

}
