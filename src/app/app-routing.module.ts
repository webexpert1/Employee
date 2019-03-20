import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ListEmployeesComponent} from './employee/list-employees.component';
import {CreateEmployeeComponent} from './employee/create-employee.component';

const appRoutes: Routes = [
	{path: 'list', component: ListEmployeesComponent},
	{path: 'create', component: CreateEmployeeComponent},
	{path: '', redirectTo: '/list' , pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
