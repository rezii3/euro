import { Component } from '@angular/core';
import { Data, Post } from '../interfaces/news.model';
import { EuroService } from '../service/euro.service';

@Component({
  selector: 'app-kvara',
  templateUrl: './kvara.component.html',
  styleUrl: './kvara.component.css'
})
export class KvaraComponent {
  news:Post[]=[]
constructor(private _euro:EuroService ){
  this._euro.getkvara().subscribe((Response)=>{
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
