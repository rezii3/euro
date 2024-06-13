import { Component } from '@angular/core';
import { Datum } from '../interfaces/euro.model';
import { EuroService } from '../service/euro.service';
import { Slide } from '../interfaces/slide.model';
import { Data } from '../interfaces/video.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  info:Datum[]=[]
  carusel:Slide[]=[]
  video!:Data
constructor(private _euro:EuroService){
  this._euro.getList().subscribe((data) =>{
    this.info = data.data
  })
  this.giveCarusel()
  this.giveVideo()
}
giveCarusel(){
  this._euro.getSlide().subscribe((response) =>{
    this.carusel = response.data
  })
}
giveVideo(){
this._euro.getVideo().subscribe((data) =>{
  this.video = data.data
})
}

}
