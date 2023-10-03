import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PRODUTOS_FORM_CONFIG } from './formularios/produtos.form';
import { ProdutoRequest } from '../../models/produto.request';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {
  formulario!: FormGroup;


  constructor(private service: ProdutoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      this.formulario = new FormGroup({})
    }

    ngOnInit(): void {
     this.inicializarFormulario();
    }

    validarDatas(formGroup: FormGroup) {
      const dataValidade = formGroup.get('dataValidade')?.value;
      const dataFabricacao = formGroup.get('dataFabricacao')?.value;
  
      if (dataValidade <= dataFabricacao) {
          formGroup.get('dataValidade')?.setErrors({ 'invalidDate': true, 'invalidRange': true });
          formGroup.get('dataFabricacao')?.setErrors({ 'invalidDate': true, 'invalidRange': true });
      } else {
          formGroup.get('dataValidade')?.setErrors(null);
          formGroup.get('dataFabricacao')?.setErrors(null);
      }
  }

  inicializarFormulario(){
    this.formulario = this.formBuilder.group(PRODUTOS_FORM_CONFIG);
  }

  organizaRequest(){
    const request = new ProdutoRequest({});
    request.Descricao = this.formulario.value.Descricao;
    request.DataFabricacao = this.formulario.value.DataFabricacao;
    request.DataValidade = this.formulario.value.DataValidade;
    request.IdFornecedor = this.formulario.value.IdFornecedor;
    return request;
  }
  
    cadastrarProduto() {
      if(this.formulario.valid){
        this.service.cadastrarProduto(this.organizaRequest()).subscribe(() => {
          this.router.navigate(['/produtos/lista'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/produtos/lista'])
    }
  

}
