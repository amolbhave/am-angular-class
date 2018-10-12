import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class StaticDataService {

  private serviceName = 'StaticDataService';

  getServiceName() {
    return this.serviceName;
  }

  add( x: number, y: number ) {
    return x + y;
  }
}
