/* tslint:disable */
import { Component } from '@angular/core';

@Component( {
  selector: 'hello-world',
  //
  template: `
    <header class="pb-2 mt-4 mb-2 border-bottom text-primary">
      <h1>Welcome to our first Angular 2 application</h1>
    </header>
    <main>
      <h3>A message from our coder:</h3>
      <p>{{ message }}</p>
    </main>`
} )
export class AppComponent {message = 'Hello, world!';}
