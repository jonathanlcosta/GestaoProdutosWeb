import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CadastrarProdutoComponent } from './componentes/cadastrar-produto/cadastrar-produto.component';
import { ListaProdutoComponent } from './componentes/lista-produto/lista-produto.component';
import { EditarProdutoComponent } from './componentes/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './componentes/excluir-produto/excluir-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarFornecedorComponent } from './componentes/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { ListarFornecedorComponent } from './componentes/listar-fornecedor/listar-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarProdutoComponent,
    ListaProdutoComponent,
    EditarProdutoComponent,
    ExcluirProdutoComponent,
    CadastrarFornecedorComponent,
    ListarFornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
