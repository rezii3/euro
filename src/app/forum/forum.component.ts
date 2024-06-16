import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Data } from '../interfaces/video.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {
  forum!:Data
  constructor(private _euro:EuroService){
    this._euro.getForum().subscribe(data=>{
      this.forum = data.data
    })
  }

}
