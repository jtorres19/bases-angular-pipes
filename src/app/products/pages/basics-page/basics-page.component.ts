import {Component} from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  nameLower: string = 'juan'
  nameUpper: string = 'JUAN'
  fullName: string = 'JuAn tOrReS'
  customDate: Date = new Date();
}
