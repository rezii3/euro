import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Datum } from '../interfaces/euro.model';

import { routi } from '../interfaces/euro.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  popular: Datum[] = []

  constructor(private _euro: EuroService) {
    this._euro.getSideUrl().subscribe((response) => {
      this.popular = response.data.map(post => ({
        ...post,
         timeSincePublished: this.calculateTimeSincePublished(post.publishedAt)
       }));
    });
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
