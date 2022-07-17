import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas.component';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

const routes: Routes = [{ path: 'vendas', component: VendasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),ThemeModule,
    NbMenuModule],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
