import { Injectable } from '@angular/core';
import { categories } from '../../data/categories';

@Injectable( {
  providedIn: 'root'
} )
export class CategoryLookupService {

  findCategory(categoryId: string) {
    return categories.find( c => c.id === categoryId );
  }
}
