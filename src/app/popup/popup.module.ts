import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { CreateTaskFromModule } from '../create-task-from/create-task-from.module';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    CreateTaskFromModule
  ],
  exports: [
    PopupComponent
  ],
  entryComponents: [
    PopupComponent
  ]
})
export class PopupModule { }
