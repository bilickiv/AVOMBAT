import { Component, OnInit } from '@angular/core';
import { TreeModule, ITreeState } from 'angular-tree-component';
import { StorageService } from '../storage.service';

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
  nodes = [];
  el;
  state: ITreeState = localStorage.treeState && JSON.parse(localStorage.treeState);
  options = {
    getChildren
  };
  constructor(private node: StorageService) {
    this.el = node;
    this.el.connect();
  }
  public ping() {
    this.el.getPrice();
  }
  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.nodes = this.node.getList();
  }

  setState(state: ITreeState) {
    localStorage.treeState = JSON.stringify(state);
  }
}
