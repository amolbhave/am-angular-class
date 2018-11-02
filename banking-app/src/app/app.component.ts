import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent implements OnInit {
  loading = false;

  constructor( private router: Router,
               private modalService: NgbModal) {}

  ngOnInit() {
    this.router.events.subscribe( ( event: Event ) => {
      switch ( true ) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
        case event instanceof NavigationEnd: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    } );
  }

}
