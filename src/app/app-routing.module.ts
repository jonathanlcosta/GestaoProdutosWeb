import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutoComponent } from './componentes/lista-produto/lista-produto.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './componentes/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './componentes/excluir-produto/excluir-produto.component';
import { ListarFornecedorComponent } from './componentes/listar-fornecedor/listar-fornecedor.component';
import { CadastrarFornecedorComponent } from './componentes/cadastrar-fornecedor/cadastrar-fornecedor.component';

const routes: Routes = [
{path: '', redirectTo: '/listarProduto', pathMatch: 'full'},
{path: 'listarProduto', component: ListaProdutoComponent},
{path: 'cadastrarProduto', component: CadastrarProdutoComponent},
{path: 'editarProduto/:codigo', component: EditarProdutoComponent},
{path: 'produtos/excluirProduto/:codigo', component: ExcluirProdutoComponent},
{path: 'listarFornecedor', component: ListarFornecedorComponent},
{path: 'cadastrarFornecedor', component: CadastrarFornecedorComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
