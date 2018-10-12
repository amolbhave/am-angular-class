import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesDAOService } from '../../core/categories-dao.service';
import { Category } from '../Category';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'category-manager',

  templateUrl: './categories-manager.component.html',
  styles: [
    '.hide { display: none }',
    '.show { display: block }'
  ]
} )
export class CategoryManagerComponent implements OnInit, OnDestroy {
  selectedCategory: Category;
  categories: Category[];
  subs: Subscription[] = [];
  hideList = false;

  constructor( public dao: CategoriesDAOService ) {}

  ngOnInit() {
    this.subs.push(
      this.dao.list()
          .subscribe( apiList => ( this.categories = apiList ) )
    );
  }

  ngOnDestroy() {
    this.subs.forEach( sub => sub.unsubscribe() );
  }

  goBack() {
    this.hideList = false;
  }

  handleRowSelect( category: Category ) {
    console.log( 'CategoryManager.handleRowSelect(): ', category );
    this.selectedCategory = category;
    this.hideList = true;
  }

  handleGetCategory( dir ) {
    let catPosition;
    this.categories.some( ( c, index ) => {
      catPosition = index;
      return c.id === this.selectedCategory.id;
    } );

    catPosition = Math.max( 0, Math.min( this.dao.size() - 1, catPosition + dir ) );
    this.selectedCategory = this.categories[ catPosition ];
  }
}
