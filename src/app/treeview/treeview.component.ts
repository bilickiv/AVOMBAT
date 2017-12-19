import { Component, OnInit } from '@angular/core';
import { TreeModule, ITreeState } from 'angular-tree-component';
const getChildren = () => new Promise((resolve) => {
  setTimeout(() => resolve([
    { id: 5, name: 'child2.1', children: [] },
    { id: 6, name: 'child2.2', children: [
      { id: 7, name: 'grandchild2.2.1' }
    ] }
  ]), 2000);
});

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  state: ITreeState = localStorage.treeState && JSON.parse(localStorage.treeState);
  options = {
    getChildren
  };

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      hasChildren: true
    }
  ];

  setState(state: ITreeState) {
    localStorage.treeState = JSON.stringify(state);
  }
}
