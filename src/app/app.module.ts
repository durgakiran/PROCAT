import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterRoutingModule } from './router/router-routing.module';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, CoreModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MaterialModule, RouterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
