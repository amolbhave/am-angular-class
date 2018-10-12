import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'static-data',
  templateUrl: './static-data.component.html',
  styles: []
})
export class StaticDataComponent implements OnInit {

  constructor(private service: StaticDataService) { }

  ngOnInit() {
  }

}
