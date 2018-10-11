/* tslint:disable: no-trailing-whitespace */
import { Component } from '@angular/core';

@Component( {
  selector: 'demo-event-handling',
  template: `<h2>Demo: Event handling</h2>
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-danger" (click)="clickHandler()">Click me!</button>
    </div>
    <div class="col-md-6">
      <div (mouseenter)="hoverHandler($event)"
           (mouseleave)="hoverHandler($event)"
           style="width: 200px; height: 200px; background-color:red">
      </div>
    </div>
  </div>`
} )
export class DemoEventHandlingComponent {
  clickHandler() { console.log( 'You clicked on the button. Exciting!' ); }

  hoverHandler( event ) {
    if ( event.type === 'mouseenter' ) {
      console.log( 'You are hovering over the div, well done.' );
    } else { console.log( 'You have moved off the div, a relief.' ); }
  }
}

