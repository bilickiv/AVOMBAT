import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuerybuilderComponent } from './querybuilder/querybuilder.component';
import { AppRoutingModule } from './/app-routing.module';
import { ImporthandlerComponent } from './importhandler/importhandler.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { TreeModule } from 'angular-tree-component';


@NgModule({
  declarations: [
    AppComponent,
    QuerybuilderComponent,
    ImporthandlerComponent,
    TreeviewComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
