import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';  
import {ToolbarModule} from 'primeng/toolbar';
import { PositionComponent } from './components/position/position.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    AccordionModule,
    ToolbarModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
