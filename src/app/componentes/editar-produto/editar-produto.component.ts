import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {
  formulario!: FormGroup;


  constructor(private service: ProdutoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      const codigo = this.route.snapshot.paramMap.get('codigo');
      this.service.buscarProdutoPorId(parseInt(codigo!)).subscribe((produto) => {
          this.formulario = this.formBuilder.group({
              codigo: [produto.codigo],
              descricao: [produto.descricao, Validators.compose([
                  Validators.required,
                  Validators.pattern(/^.+$/)
              ])],
              dataValidade: [produto.dataValidade, Validators.compose([
                  Validators.required,
                  Validators.minLength(10)
              ])],
              dataFabricacao: [produto.dataFabricacao, Validators.compose([
                  Validators.required,
                  Validators.minLength(10)
              ])],
              idFornecedor: [produto.fornecedor.id, Validators.compose([
                  Validators.required,
                  Validators.minLength(1)
              ])],
          });
          this.validarDatas(this.formulario);
          this.formulario.get('dataValidade')?.valueChanges.subscribe(() => {
              this.validarDatas(this.formulario);
          });
          this.formulario.get('dataFabricacao')?.valueChanges.subscribe(() => {
              this.validarDatas(this.formulario);
          });
      });
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
  
    
  
    editarProduto() {
      if(this.formulario.valid){
        this.service.editarProduto(this.formulario.value).subscribe(() => {
          this.router.navigate(['/listarProduto'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/listarProduto'])
    }
}
