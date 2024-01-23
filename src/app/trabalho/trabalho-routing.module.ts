import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhoPage } from './trabalho.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalhoPageRoutingModule {}
