import { Component } from '@angular/core';
import { Post } from '../interfaces/news.model';
import { EuroService } from '../service/euro.service';

@Component({
  selector: 'app-sport-georgia',
  templateUrl: './sport-georgia.component.html',
  styleUrl: './sport-georgia.component.css'
})
export class SportGeorgiaComponent {
  news:Post[]=[]
  constructor(private _euro:EuroService ){
    this._euro.getGeorgia().subscribe((Response)=>{
      this.news = Response.data.posts.map(post => ({
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
