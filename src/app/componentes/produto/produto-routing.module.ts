import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from '../cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from '../excluir-produto/excluir-produto.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarProdutoComponent},
  {path: 'editar/:codigo', component: EditarProdutoComponent},
  {path: 'excluir/:codigo', component: ExcluirProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
