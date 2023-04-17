import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutoComponent } from './componentes/produto/lista-produto/lista-produto.component';
import { ListarFornecedorComponent } from './componentes/fornecedor/listar-fornecedor/listar-fornecedor.component';
import { CadastrarFornecedorComponent } from './componentes/fornecedor/cadastrar-fornecedor/cadastrar-fornecedor.component';

const routes: Routes = [
{path: '', redirectTo: '/listarProduto', pathMatch: 'full'},
{path: 'listarProduto', component: ListaProdutoComponent},
{path: 'produtos', loadChildren: () => import('../app/componentes/produto/produto.module').then(m => m.ProdutoModule)},
{path: 'fornecedores', loadChildren: () => import('../app/componentes/fornecedor/fornecedor.module').then(m => m.FornecedorModule)},
// {path: 'cadastrarFornecedor', component: CadastrarFornecedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
