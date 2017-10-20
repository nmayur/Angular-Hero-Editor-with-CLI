import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// Services
import { HeroServiceService } from './services/hero-service.service';
import { HeroSearchService } from './services/hero-search.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [
    HeroServiceService,
    HeroSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
