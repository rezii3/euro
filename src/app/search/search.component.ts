import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { EuroService } from '../service/euro.service';
import { CommonModule } from '@angular/common';
import { Datum } from '../interfaces/euro.model';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: true,
  imports: [ScrollPanelModule,CommonModule,NzIconModule],

  
})
export class SearchComponent {
post:Datum[]=[]
author:Datum[]=[]

constructor(private _http: EuroService){
  this._http.getDropUrl().subscribe((data)=>{
   this.post = data.data
  })
this._http.getAuthors().subscribe((data)=>{
  this.author = data.data
})
}
}
