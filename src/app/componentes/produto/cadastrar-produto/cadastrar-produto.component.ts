import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    ) { }

    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        descricao: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/^.+$/)
        ])],
        dataValidade: ['', Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ])],
        dataFabricacao: ['', Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ])],
        idFornecedor: ['', Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])],
      }, { validator: this.validarDatas });
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
  
    cadastrarProduto() {
      if(this.formulario.valid){
        this.service.cadastrarProduto(this.formulario.value).subscribe(() => {
          this.router.navigate(['/produtos/lista'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/produtos/lista'])
    }
  

}
