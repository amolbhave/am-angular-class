import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component( {
  selector: 'custom-events',
  template: `
    <div>
      <h2>The Parent component</h2>
      <p>When you click on the button below (which is in a child component),
        I will receive a custom event called childCustomEvent</p>
      <p *ngIf="receivedMessage">Received: {{ receivedMessage }}</p>
      <hr>
      <custom-events-child (childCustomEvent)="handleChildCustomEvent($event)"></custom-events-child>
    </div>`,
  styles: []
} )
export class CustomEventsComponent implements OnInit {

  receivedMessage: string;
  constructor() { }

  ngOnInit() {
  }

  handleChildCustomEvent( msg: string ) {
    console.log( `The message received from the child component is [${msg}]` );
    this.receivedMessage = msg;
  }

}

@Component( {
  selector: 'custom-events-child',
  template: `
    <div>
      <h3>Child component</h3>
      <button class="btn btn-primary" (click)="handleClick()">Click me!</button>
    </div>`
} )
export class CustomEventsChildComponent {

  @Output()
  childCustomEvent: EventEmitter<string> = new EventEmitter<string>();

  handleClick() {
    console.log( 'CustomEventsChildComponent is handling a click and then firing a custom event' );
    this.childCustomEvent.emit( 'Hello from the child component' );
  }

}
