import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Datum } from '../interfaces/euro.model';

@Component({
  selector: 'app-authors-slide',
  templateUrl: './authors-slide.component.html',
  styleUrl: './authors-slide.component.css'
})
export class AuthorsSlideComponent {
  authors:Datum[]=[]
  constructor(private _euro:EuroService){
    this._euro.getAuthors().subscribe((response) => {
      this.authors = response.data
    });
  }

}
