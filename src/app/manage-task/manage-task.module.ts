import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ManageTaskRoutingModule } from './manage-task-routing.module';
import { ManageTaskComponent } from './manage-task.component';
import { CardHostModule } from '../card-host/card-host.module';
import { PopupModule } from '../popup/popup.module';
import { ManageTaskService } from './manage-task.service';
import { ChipModule } from '../chip/chip.module';


@NgModule({
  declarations: [
    ManageTaskComponent
  ],
  imports: [
    CommonModule,
    ManageTaskRoutingModule,
    CardHostModule,
    DragDropModule,
    PopupModule,
    ChipModule
  ],
  providers: [
    ManageTaskService
  ]
})
export class ManageTaskModule { }
