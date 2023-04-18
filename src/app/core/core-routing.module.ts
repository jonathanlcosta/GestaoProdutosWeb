import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
{path: '', redirectTo: '/Home', pathMatch: 'full'},
{path: 'Home', component: HomeComponent},
{path: 'produtos', loadChildren: () => import('../componentes/produto/produto.module').then(m => m.ProdutoModule)},
{path: 'fornecedores', loadChildren: () => import('../componentes/fornecedor/fornecedor.module').then(m => m.FornecedorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
