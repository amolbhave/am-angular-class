import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { Category } from '../Category';
import { sortBy } from 'lodash';
import { CategoriesDAOService } from '../../core/categories-dao.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styles: []
} )
export class CategoriesListComponent implements OnInit, OnChanges, OnDestroy {
  currentSortField = '';

  catFilter = { id: '', categoryName: '', categoryType: '' };

  @Input() categories: Category[];
  displayCategories: Category[];

  @Output() rowSelect: EventEmitter<Category> = new EventEmitter<Category>();

  constructor( private dao: CategoriesDAOService,
               private router: Router ) {}

  ngOnInit() {
    if ( !this.categories ) {
      this.dao.list()
          .subscribe( categories => {
            this.categories = categories;
            this.displayCategories = [ ...categories ];
          } );
    }
  }

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes.categories && changes.categories.currentValue ) {
      this.displayCategories = [ ...changes.categories.currentValue as Category[] ];
    }
  }

  ngOnDestroy() {
    console.log( 'CategoriesList was destroyed.' );
  }

  handleEdit( c: Category ) {
    this.router.navigate( [ '/categories/edit', c.id ] );
  }

  handleNavigate( c: Category ) {
    this.router.navigate( [ '/categories/detail', c.id ] );
  }

  updateFilter( event ) {
    this.catFilter[ event.target.name ] = event.target.value;
    const keys = Object.keys( this.catFilter );
    this.displayCategories = this.categories.filter( cat => {
      return keys.every( key => {
        return cat[ key ]
        .toUpperCase()
        .includes( this.catFilter[ key ].toUpperCase() );
      } );
    } );
  }

  sortCategories( sortField ) {
    this.displayCategories = sortBy<Category>( this.displayCategories, [
      sortField
    ] );
    if ( this.currentSortField === sortField ) {
      this.displayCategories.reverse();
      this.currentSortField = '-' + sortField;
    } else {
      this.currentSortField = sortField;
    }
  }

  handleClick( selectedCategory: Category ) {
    this.rowSelect.emit( selectedCategory );

    // Swap this code in if you want to use the router to switch views
    // this.router.navigate( [ '/categories/detail', selectedCategory.id ] );
  }
}
