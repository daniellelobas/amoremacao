import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspiritualidadePageRoutingModule } from './espiritualidade-routing.module';

import { EspiritualidadePage } from './espiritualidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspiritualidadePageRoutingModule
  ],
  declarations: [EspiritualidadePage]
})
export class EspiritualidadePageModule {}
