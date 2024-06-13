import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authorsRoot, routi } from '../interfaces/euro.model';
import { newsroot } from '../interfaces/news.model';
import { Welcome } from '../interfaces/power.model';
import { latestRoot } from '../interfaces/latest.model';
import { slideRout } from '../interfaces/slide.model';
import { videoRoot } from '../interfaces/video.model';


@Injectable({
  providedIn: 'root'
})
export class EuroService {

  constructor(private _http: HttpClient) { }
  sideUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/featured-posts";
  plusUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/analytic";
  dropUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/latest";
  authorsUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/authors?page=1&size=15"
  newsUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/search?query=&detailed=true"
  powerUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/powered-by-europebet/featured"
  sideCardUrl: string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/powered-by-europebet?size=10"
  lastAddUrl:string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts/more-latest"
  kvaraUrl:string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/search?query=%E1%83%AE%E1%83%95%E1%83%98%E1%83%A9%E1%83%90&detailed=true"
  GeorgiaUrl:string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/search?query=%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%A3%E1%83%9A%E1%83%98&detailed=true"
  nakrebiUrl:string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/search?query=%E1%83%9C%E1%83%90%E1%83%99%E1%83%A0%E1%83%94%E1%83%91%E1%83%98&detailed=true"
  listUrl:string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/posts?cursor="
  videoUrl:string = "http://localhost:3000/proxy?targetUrl=https://europop.ge/api/video-galleries/142"


  qvemotapost: string = "https://europop.ge/api/posts/latest?siteBlockId=509"


  getSideUrl() {
    return this._http.get<routi>(this.sideUrl);
  }
  getPlusUrl() {
    return this._http.get<routi>(this.plusUrl);
  }
  getDropUrl() {
    return this._http.get<routi>(this.dropUrl)
  }
  getAuthors() {
    return this._http.get<authorsRoot>(this.authorsUrl)
  }
  getNews() {
    return this._http.get<newsroot>(this.newsUrl)
  }
  getPower() {
    return this._http.get<Welcome>(this.powerUrl)
  }
  getSideCard(){
    return this._http.get<routi>(this.sideCardUrl)
  }
  getlastAdd(){
    return this._http.get<latestRoot>(this.lastAddUrl)
  }
  getkvara(){
    return this._http.get<newsroot>(this.kvaraUrl)
  }
  getGeorgia(){
    return this._http.get<newsroot>(this.GeorgiaUrl)
  }
  getNakrebi(){
    return this._http.get<newsroot>(this.nakrebiUrl)
  }
  getList(){
    return this._http.get<routi>(this.listUrl)
  }
  getSlide(){
    return this._http.get<slideRout>(this.plusUrl)
  }
  getVideo(){
    return this._http.get<videoRoot>(this.videoUrl)
  }
}
