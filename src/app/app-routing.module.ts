import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'manage-task', pathMatch: 'full' },
  {
    path: 'manage-task',
    loadChildren: () => import('./manage-task/manage-task.module').then(m => m.ManageTaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
