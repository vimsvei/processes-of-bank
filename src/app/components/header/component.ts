import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './component.html',
})
export class HeaderComponent {

  public headerTitle: string;
  constructor() {
    this.headerTitle = environment.ApplicationHeader;
  }
}
