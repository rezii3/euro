import { Component } from '@angular/core';
import { EuroService } from '../service/euro.service';

@Component({
  selector: 'app-navbar-plus',
  templateUrl: './navbar-plus.component.html',
  styleUrl: './navbar-plus.component.css'
})
export class NavbarPlusComponent  {
  hoveredContent: string = 'default';

  data: any[] = [];

  constructor(private _euro: EuroService) {}

  ngOnInit() {
    this._euro.getPlusUrl().subscribe((some) => {
      this.data = some.data; 
    });
  }

  menuItems = [
    { key: 'litic', label: 'ანალიტიკა' },
    { key: 'blog', label: 'ბლოგი' },
    { key: 'history', label: 'ისტორია' },
    { key: 'qviz', label: 'ქვიზები' },
  ];

  showContent(key: string) {
    this.hoveredContent = key;
  }

  hideContent() {
    this.hoveredContent = 'default';
  }
}
