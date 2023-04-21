import { ListarFornecedorComponent } from './paginas/listar-fornecedor/listar-fornecedor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarFornecedorComponent } from './paginas/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FornecedorRoutingModule } from './fornecedor-routing.module';



@NgModule({
  declarations: [ListarFornecedorComponent, CadastrarFornecedorComponent],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FornecedorRoutingModule
  ],
  exports: [ListarFornecedorComponent, CadastrarFornecedorComponent]
})
export class FornecedorModule { }
