import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../core/config.service';

@Component({
  selector: 'app-travel-options-list',
  templateUrl: './travel-options-list.component.html',
})
export class TravelOptionsListComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService
      .getTravelOptions()
      .subscribe((data) => console.log('data', data));
  }
}
