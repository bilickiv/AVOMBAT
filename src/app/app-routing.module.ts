import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuerybuilderComponent} from './querybuilder/querybuilder.component'
import { ImporthandlerComponent } from './importhandler/importhandler.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/query', pathMatch: 'full' },
  { path: 'query', component: QuerybuilderComponent },
  { path: 'import', component: ImporthandlerComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
