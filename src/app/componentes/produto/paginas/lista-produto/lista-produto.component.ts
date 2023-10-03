import { Component, ViewChild } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { NgForm } from '@angular/forms';
import { PaginacaoRequest } from '../../../util/paginacaoRequest';
import { HttpParams } from '@angular/common/http';
import { ProdutoResponse } from '../../models/produtoResponse';
import { PaginacaoResponse } from 'src/app/componentes/util/paginacaoConsulta';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent {
form: NgForm;

  paginacaoRequest: PaginacaoRequest = new PaginacaoRequest({});
  produtos!: PaginacaoResponse<ProdutoResponse>;

  constructor(private service: ProdutoService) {
     }


  ngOnInit(): void {
    // this.recuperarProdutos()
  }



  
  // recuperarProdutos() {
  //   this.service.recuperarProdutos(this.montaQuery()).subscribe(products => {
  //     this.produtos = products;
  //     this.paginacaoRequest.totalRegistros = products.quantidade;
  //     this.paginacaoRequest.totalPaginas = Math.ceil(products.quantidade /
  //       this.paginacaoRequest.quantidadeProdutosPorPagina);
  //     console.log(products);
  //   });
  // }

}
