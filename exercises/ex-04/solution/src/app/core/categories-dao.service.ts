import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../categories/Category';

@Injectable( {
  providedIn: 'root'
} )
export class CategoriesDAOService {

  baseUrl = 'http://localhost:8000/categories';
  count = 0;
  idSeq = 200;

  constructor( private client: HttpClient ) { }

  list(): Observable<Category[]> {
    return this.client.get<Category[]>( this.baseUrl );
  }

  get(id: string | number) {
    return this.client.get<Category>(`${this.baseUrl}/${id}`);
  }

  save(c: Category) {
    if (!c.id) {
      c.id = '' + this.idSeq++;
      this.client.post(this.baseUrl, c)
          .subscribe(results => console.log('results: ', results));
    } else {
      this.client.patch( `${this.baseUrl}/${c.id}`, c )
          .subscribe( results => console.log( 'results: ', results ) );
    }

  }

  size() {
    return this.count;
  }

}
