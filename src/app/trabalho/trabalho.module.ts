import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabalhoPageRoutingModule } from './trabalho-routing.module';

import { TrabalhoPage } from './trabalho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabalhoPageRoutingModule
  ],
  declarations: [TrabalhoPage]
})
export class TrabalhoPageModule {}
