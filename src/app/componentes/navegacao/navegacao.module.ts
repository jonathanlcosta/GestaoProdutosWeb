import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoRoutingModule } from '../produto/produto-routing.module';
import { ProdutoModule } from '../produto/produto.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule, 
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ], exports: [MenuComponent]
})
export class NavegacaoModule { }
