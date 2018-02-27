import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Item} from '../item.service';


@Component({
  selector: 'app-item-card',
  templateUrl: './component.html',
})
export class ItemCardComponent {

  @Input() items: Item[];

  constructor(private router: Router) {}

  getSubItem(item: Item) {}
}
