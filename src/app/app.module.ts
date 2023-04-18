import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './componentes/produto/produto.module';
import { FornecedorModule } from './componentes/fornecedor/fornecedor.module';
import { NavegacaoModule } from './componentes/navegacao/navegacao.module';
import { HomeComponent } from './componentes/home/home.component';
import { HomeModule } from './componentes/home/home.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
