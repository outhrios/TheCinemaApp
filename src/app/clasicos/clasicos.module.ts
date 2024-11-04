import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasicosPageRoutingModule } from './clasicos-routing.module';

import { ClasicosPage } from './clasicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasicosPageRoutingModule
  ],
  declarations: [ClasicosPage]
})
export class ClasicosPageModule {}
