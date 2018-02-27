import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PouchDBService} from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PouchDBService
  ]
})
export class PouchDBModule {}
