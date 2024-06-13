import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  change(value: boolean): void {
    console.log(value);
  }
  switchValue = false;
}
