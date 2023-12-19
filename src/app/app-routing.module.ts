import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './crud/pages/main/main.component';
import { ListComponent } from './crud/components/list/list.component';
import { AddComponent } from './crud/components/add/add.component';

const routes: Routes = [
  {
    path: 'salesperson',
    component: MainComponent,
    children: [
      {
        path: '', component: ListComponent
      },
      {
        path: 'new', component: AddComponent
      },
      {
        path: ':id', component: AddComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'salesperson'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
