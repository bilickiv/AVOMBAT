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
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }
 
}
