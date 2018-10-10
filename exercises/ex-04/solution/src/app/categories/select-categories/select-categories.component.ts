import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoriesDAOService } from '../../core/categories-dao.service';
import { Category } from '../Category';

@Component( {
  selector: 'select-categories',
  templateUrl: './select-categories.component.html',
  styles: []
} )
export class SelectCategoriesComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  pickCategory = new EventEmitter<string>();

  categories: Category[];
  selectedCategory: Category;

  constructor( private dao: CategoriesDAOService ) { }

  handleChange( categoryId: string ) {
    this.pickCategory.emit( categoryId );
  }

  ngOnInit() {
    this.dao.list()
        .subscribe( results => this.categories = results );
    // console.log('list: ', this.dao.list);
  }

}
