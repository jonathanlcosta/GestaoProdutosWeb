import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ExcluirProdutoComponent } from './excluir-produto/excluir-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [ListaProdutoComponent, CadastrarProdutoComponent, ExcluirProdutoComponent, EditarProdutoComponent],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProdutoRoutingModule
  ],
  exports: [ListaProdutoComponent, CadastrarProdutoComponent, ExcluirProdutoComponent, EditarProdutoComponent]
})
export class ProdutoModule { }
