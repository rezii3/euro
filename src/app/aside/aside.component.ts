import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Data } from '../interfaces/power.model';
import { Datum } from '../interfaces/euro.model';
import { LDatum } from '../interfaces/latest.model';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  power!:Data 
  cardInfo:Datum[] = []
  late:LDatum[] = []
constructor(private _service:EuroService){
  this.givepower()
  this.giveSCard()
  this.givelastAdd()
}
givepower() {
  this._service.getPower().subscribe((response) => {
    this.power = response.data

  })
}
giveSCard(){
  this._service.getSideCard().subscribe((info)=>{
    this.cardInfo = info.data
  })
}
givelastAdd(){
  this._service.getlastAdd().subscribe((pov)=>{
    this.late = pov.data
  })
}
}
