import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'payee-detail-footer',
  template: `
    <p class="mt-1">
      A popup footer message <br>
      <button type="button" class="btn btn-sm btn-info" (click)="close()">close</button>
    </p>
  `,
  styles: []
} )
export class PayeeDetailFooterComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  close() {
    console.log( 'Trying to close this' );
    // Ugly, but thanks, https://github.com/angular/angular/issues/5122#issuecomment-311351733
    this.router.navigate( [ '.', { outlets: { footerOutlet: null } } ], { relativeTo: this.route.parent } );
  }

}
