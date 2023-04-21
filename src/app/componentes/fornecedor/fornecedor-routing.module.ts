import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFornecedorComponent } from './paginas/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedorComponent } from './paginas/listar-fornecedor/listar-fornecedor.component';

const routes: Routes = [
  {path: 'cadastrar', component: CadastrarFornecedorComponent},
  {path: 'listar', component: ListarFornecedorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
