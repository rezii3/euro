import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Datum } from '../interfaces/euro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  popular: Datum[] = []

  constructor(private _euro: EuroService) {
    this._euro.getSideUrl().subscribe((response) => {
      this.popular = response.data 
    });
  }

}
