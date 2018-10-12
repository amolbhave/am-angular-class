import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoriesDAOService } from '../../core/categories-dao.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component( {
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styles: []
} )
export class CategoryFormComponent implements OnInit {
  action = 'Adding a category';
  newCat: ( Category | object ) = {
    id: '',
    categoryName: '',
    categoryType: ''
  };

  constructor( private dao: CategoriesDAOService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.url.subscribe( url => {
      if ( url.toString()
              .includes( 'edit' ) ) {
        this.route.params.pipe( switchMap(
          params => this.dao.get( params.id ) ) )
            .subscribe( c => {
              this.newCat = c;
              this.action = `Editing ${c.categoryName}`;
            } );
      }
    } );
  }

  handleSubmit( cat: Category ) {
    this.dao.save( cat );
  }

}
