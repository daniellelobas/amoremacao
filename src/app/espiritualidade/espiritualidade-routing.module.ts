import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspiritualidadePage } from './espiritualidade.page';

const routes: Routes = [
  {
    path: '',
    component: EspiritualidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspiritualidadePageRoutingModule {}
