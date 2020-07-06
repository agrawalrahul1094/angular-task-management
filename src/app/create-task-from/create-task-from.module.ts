import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskFromComponent } from './create-task-from.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateTaskFromComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateTaskFromComponent
  ],
  entryComponents: [
    CreateTaskFromComponent
  ]
})
export class CreateTaskFromModule { }
