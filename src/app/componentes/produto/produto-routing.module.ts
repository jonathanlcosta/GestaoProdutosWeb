import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './paginas/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './paginas/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './paginas/excluir-produto/excluir-produto.component';
import { ListaProdutoComponent } from './paginas/lista-produto/lista-produto.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarProdutoComponent},
  {path: 'lista', component: ListaProdutoComponent},
  {path: 'editar/:codigo', component: EditarProdutoComponent},
  {path: 'excluir/:codigo', component: ExcluirProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
