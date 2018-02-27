import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ItemService} from './item.service';
import {ItemCardComponent} from './card/component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule
  ],
  declarations: [
    ItemCardComponent
  ],
  exports: [
    ItemCardComponent
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule {

}
