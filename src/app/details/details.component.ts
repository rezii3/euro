import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EuroService } from '../service/euro.service';
import { Data } from '../interfaces/comeId.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  come!:Data
  id!:number
  constructor(private route:ActivatedRoute,private _euro:EuroService){
    this.route.params.subscribe((param)=>{
      this.id = param['id']
    })
    this._euro.getSideID(this.id).subscribe((data)=>{
      this.come = data.data
      
    })
  }
  
}
