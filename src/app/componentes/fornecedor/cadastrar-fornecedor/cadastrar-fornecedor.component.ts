import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

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
    ) { }

    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        descricao: ['', [
          Validators.required,
          Validators.minLength(1)
        ]],
        cnpj: ['', [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
          this.validarCNPJ
        ]],
      });
    }

    validarCNPJ(control: AbstractControl): ValidationErrors | null {
      const cnpj = control.value?.replace(/[^\d]+/g, '');
    
      if (!cnpj || cnpj.length !== 14) {
        return { 'cnpjInvalido': true };
      }
    
      return null;
    }
  
    cadastrarFornecedor() {
      if(this.formulario.valid){
        this.service.cadastrarFornecedor(this.formulario.value).subscribe(() => {
          this.router.navigate(['/listarFornecedor'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/listarFornecedor'])
    }
  
}
