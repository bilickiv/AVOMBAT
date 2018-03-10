import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from 'elasticsearch';

@Injectable()
export class StorageService {
  private bookURL = 'http://tamas:53yxUsbQYLRoVy6@dighum.bibl.u-szeged.hu:8080/estc/';
  private client: Client;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  });
  options = new RequestOptions({ headers: this.headers });
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

  constructor(private http: Http) { }
  public connect() {
    this.client = new Client({
      host: [
        {
          host: 'dighum.bibl.u-szeged.hu',
          auth: 'tamas:53yxUsbQYLRoVy6',
          protocol: 'http',
          port: 8080
        }
      ],
      log: 'trace'
    });

  }
  public ping() {
    console.log('button pressed');
    this.client.ping({
      requestTimeout: Infinity,
      body: 'hello JavaSampleApproach!'
    });
  }
  async getPrice(currency: string): Promise<number> {
    const response = await this.http.get(this.bookURL, this.options).toPromise();
    return response.json();
  }

  getList(): any {
    return this.nodes;
  }
}
