import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';
import { Category } from '../Category';
import { ActivatedRoute } from '@angular/router';
import { CategoriesDAOService } from '../../core/categories-dao.service';

@Component( {
  selector: 'category-detail',
  templateUrl: './category-detail.component.html'
} )
export class CategoryDetailComponent implements OnInit, OnDestroy, OnChanges {
  @Input() category: Category;

  constructor(
    private route: ActivatedRoute,
    private dao: CategoriesDAOService
  ) {}

  ngOnInit() {
    console.log( 'CategoryDetailComponent: Initialized!' );
    if ( !this.category ) {
      this.route.params.subscribe( params => {
        console.log( 'Param id is ', params.id );
        this.dao.get( params.id )
            .subscribe( category => ( this.category = category ) );
      } );
    }
  }

  ngOnDestroy() {
    console.log( 'CategoryDetailComponent was destroyed.' );
  }

  ngOnChanges( changes: SimpleChanges ) {
    console.log( 'CategoryDetailComponent: something changed!' );
  }
}
