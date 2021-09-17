import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

import { ShowtaskComponent } from './showtask/showtask.component';

const routes: Routes = [ 
 
  { path: 'addtask', component: AddtaskComponent },
{ path: 'showtask', component:ShowtaskComponent },
{ path:'edit-task/:titleId', component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
