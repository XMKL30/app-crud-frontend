import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { MatTableModule } from '@angular/material/table' 
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MainComponent
  ]
})
export class CrudModule { }
