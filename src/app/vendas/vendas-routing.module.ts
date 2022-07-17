import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas.component';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { GerenciadorComponent } from './gerenciador/gerenciador.component';

const routes: Routes = [{ path: 'vendas', component: VendasComponent,
 children: [
  {
    path:'Gerenciador',
    component: GerenciadorComponent
  }
 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes),ThemeModule,
    NbMenuModule],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
