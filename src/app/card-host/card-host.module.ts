import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHostComponent } from './card-host.component';
import { CardModule } from '../card/card.module';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    CardHostComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DragDropModule
  ],
  exports: [
    CardHostComponent
  ],
  entryComponents: [
    CardHostComponent
  ]
})
export class CardHostModule { }
