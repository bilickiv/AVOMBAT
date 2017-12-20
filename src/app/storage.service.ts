import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StorageService {
  private bookURL = 'http://localhost:9200/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: Http) { }

  async getPrice(currency: string): Promise<number> {
    const response = await this.http.get(this.bookURL).toPromise();
    return response.json();
  }

  getList(): any {
    return this.nodes;
  }
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' },
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
}
