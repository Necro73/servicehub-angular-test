import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TabNavigatorModule } from '../components/tab-navigator/tab-navigator.module';
import { StateModule } from '../state/state.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; // NEW

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TabNavigatorModule,
    StateModule,
    RouterModule,
    HttpClientModule // NEW
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
