import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { VendasRoutingModule } from './vendas-routing.module';
import { VendasComponent } from './vendas.component';
import { GerenciadorComponent } from './gerenciador/gerenciador.component';


@NgModule({
  declarations: [
    VendasComponent,
    GerenciadorComponent
  ],
  imports: [
    CommonModule,
    VendasRoutingModule,
    ThemeModule,
    NbMenuModule
  ]
})
export class VendasModule { }
