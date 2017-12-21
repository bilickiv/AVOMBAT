import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StorageService {
  private bookURL = 'http://localhost:9200/';
  nodes = [
    {
      id: 1,
      name: 'Name',
      children: [
        { id: 2, name: 'Hydrogen' },
        { id: 3, name: 'Helium' },
        { id: 4, name: 'Lithium' },
        { id: 5, name: 'Beryllium' }
      ]
    },
    {
      id: 4,
      name: 'Weight',
      children: [
        { id: 5, name: '1.0079' },
        { id: 6, name: 'Helium' },
        { id: 7, name: 'Lithium' },
        { id: 8, name: 'Beryllium' }
      ]
    }
  ];
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
  
}
