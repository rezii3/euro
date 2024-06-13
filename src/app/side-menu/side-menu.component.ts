import { Component, OnInit } from '@angular/core';
import { EuroService } from '../service/euro.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit { 
  hoveredContent: string = 'default';
  data: any[] = [];

  constructor(private _euro: EuroService) {}

  ngOnInit(): void {
    this._euro.getSideUrl().subscribe((response) => {
      this.data = response.data; 
    });
  }


  menuItems = [
    { key: 'football-local', label: 'ქართული ფეხბურთი' },
    { key: 'football-world', label: 'მსოფლიო ფეხბურთი' },
    { key: 'basketball', label: 'კალათბურთი' },
    { key: 'rugby', label: 'ქართული რაგბი' },
    { key: 'mma', label: 'MMA' },
    { key: 'judo', label: 'ძიუდო' },
    { key: 'other', label: 'სხვა სახეობები' },
    { key: 'contact', label: 'კონტაქტი' }

  ];

  showContent(key: string) {
    this.hoveredContent = key;
  }

  hideContent() {
    this.hoveredContent = 'default';
  }
}

