import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';
import { Post } from '../interfaces/news.model';
import { Data } from '../interfaces/power.model';
import { Datum } from '../interfaces/euro.model';
import { LDatum } from '../interfaces/latest.model';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: Post[] = []
  power!:Data 
  cardInfo:Datum[] = []
  late:LDatum[] = []
  constructor(private _service: EuroService) {
    this._service.getNews().subscribe((data) => {
      this.news = data.data.posts.map(post => ({
        ...post,
        timeSincePublished: this.calculateTimeSincePublished(post.publishedAt)
      }));
    });
    this.givepower();
    this.giveSCard();
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
