import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from './app.routes';

import {HeaderComponent} from './components/header/component';
import {FooterComponent} from './components/footer/component';
import {WelcomeComponent} from './components/welcome/component';
import {PouchDBModule} from './pouchdb/module';
import {ItemModule} from './item/item.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    PouchDBModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
