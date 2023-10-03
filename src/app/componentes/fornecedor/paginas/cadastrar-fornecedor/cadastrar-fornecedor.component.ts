import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FornecedorService } from '../../services/fornecedor.service';
import { Router } from '@angular/router';
import { FORNECEDORES_FORM_CONFIG } from './formularios/fornecedores.form';
import { FornecedorRequest } from '../../models/fornecedor.request';

@Component({
  selector: 'app-cadastrar-fornecedor',
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrls: ['./cadastrar-fornecedor.component.css']
})
export class CadastrarFornecedorComponent {
  formulario!: FormGroup;

  constructor(private service: FornecedorService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      this.formulario = new FormGroup({})
    }

    ngOnInit(): void {
    this.iniciarFormulario();
    }

    private iniciarFormulario(): void{
      this.formulario = this.formBuilder.group(FORNECEDORES_FORM_CONFIG);
    }

    organizaFormularioFornecedor(){
     const request = new FornecedorRequest({});
     request.Descricao = this.formulario.value.Descricao;
     request.Cnpj = this.formulario.value.Cnpj;
     return request;
    }

  
    cadastrarFornecedor() {
      if(this.formulario.valid){
        this.service.cadastrarFornecedor(this.organizaFormularioFornecedor()).subscribe(() => {
          this.router.navigate(['/fornecedores/listar'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/fornecedores/listar'])
    }
  
}
