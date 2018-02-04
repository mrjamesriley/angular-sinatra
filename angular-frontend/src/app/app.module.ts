import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { SmartTableComponent } from './smart-table/smart-table.component';




@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
