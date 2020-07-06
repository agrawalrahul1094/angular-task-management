import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTaskComponent } from './manage-task.component';


const routes: Routes = [
  {
    path: '',
    component: ManageTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageTaskRoutingModule { }
