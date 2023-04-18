import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {  CoreRoutingModule } from 'src/app/core/core-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule, 
    RouterModule,
    BrowserModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ], exports: [MenuComponent]
})
export class NavegacaoModule { }
