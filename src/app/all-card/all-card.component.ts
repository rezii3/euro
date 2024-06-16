import { Component } from '@angular/core';
import { Post } from '../interfaces/news.model';
import { EuroService } from '../service/euro.service';
import { Data } from '../interfaces/video.model';
import { End } from '../interfaces/end.model';

@Component({
  selector: 'app-all-card',
  templateUrl: './all-card.component.html',
  styleUrl: './all-card.component.css'
})
export class AllCardComponent {
  news:Post[]=[]
  sport:Post[]=[]
  end:End[]=[]
  video!:Data
  constructor(private _euro:EuroService ){
    this._euro.getNakrebi().subscribe((Response)=>{
      this.news = Response.data.posts.map(post => ({
        ...post,
        timeSincePublished: this.calculateTimeSincePublished(post.publishedAt)
      }));
    })
    this.giveVideo()
    this.giveGeorgia()
    this.giveEnd()
  }
 
  giveVideo(){
    this._euro.getTato().subscribe((data) =>{
      this.video = data.data
    })
  }
  giveGeorgia(){
    this._euro.getGeorgia().subscribe((Response)=>{
      this.sport = Response.data.posts.map(post => ({
       ...post,
        timeSincePublished: this.calculateTimeSincePublished(post.publishedAt)
      }));
    })
  }
  giveEnd(){
    this._euro.getEnd().subscribe((Response)=>{
      this.end = Response.data.map(post => ({
       ...post,
        timeSincePublished: this.calculateTimeSincePublished(post.publishedAt)
      }));
    })
  }
  calculateTimeSincePublished(publishedAt: Date): string {
    const now = new Date();
    const publishedDate = new Date(publishedAt);
    const diffInMs = now.getTime() - publishedDate.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return `${diffInMinutes} წუთის წინ`; // "minutes ago"
    }
  
    return `${diffInHours} საათის წინ`; // "hours ago"
  }
}
