import { Component, OnInit } from '@angular/core';
import { TreeviewComponent } from '../treeview/treeview.component';
import { QueryholderComponent } from '../queryholder/queryholder.component';
import { TableholderComponent } from '../tableholder/tableholder.component';

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.css']
})
export class QuerybuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
