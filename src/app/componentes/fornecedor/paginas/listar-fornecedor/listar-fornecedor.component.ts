import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaginacaoRequest } from '../../../util/paginacaoRequest';
import { PaginacaoResponse } from '../../../util/paginacaoConsulta';
import { FornecedorResponse } from '../../models/fornecedorResponse';
import { FornecedorService } from '../../services/fornecedor.service';
import { HttpParams } from '@angular/common/http';
import { FornecedorRequest } from '../../models/fornecedor.request';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent {
form: NgForm;

  fornecedores!: PaginacaoResponse<FornecedorResponse>;
  request = new FornecedorRequest({});

  get getRequest(){
    return new FornecedorRequest({
      ...this.request
    })
  }


  constructor(private service: FornecedorService) {
     }


  ngOnInit(): void {
    this.recuperarFornecedores()
  }

  
  recuperarFornecedores() {
    this.service.recuperarFornecedores(this.getRequest).subscribe(fornecedores => {
      this.fornecedores = fornecedores;
    });
  }
}
