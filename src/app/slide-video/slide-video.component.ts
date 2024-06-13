import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Slide } from '../interfaces/slide.model';
import { Data } from '../interfaces/video.model';

@Component({
  selector: 'app-slide-video',
  templateUrl: './slide-video.component.html',
  styleUrl: './slide-video.component.css'
})
export class SlideVideoComponent {
  video!:Data
  constructor(private _euro:EuroService){
    this._euro.getVideo().subscribe((data) =>{
      this.video = data.data
    })
  }

}
