import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core/core-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './componentes/navegacao/navegacao.module';
import { HomeModule } from './core/paginas/home/home.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    NavegacaoModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
