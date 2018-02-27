import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './component.html',
})
export class FooterComponent {

  public copyrightYear: string;
  public copyrightOwner: string;

  constructor() {
    this.copyrightYear = environment.CopyrightYear;
    this.copyrightOwner = environment.Copyright;
  }
}

