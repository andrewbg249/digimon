import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DigimonComponent } from './components/dashboard/digimon/digimon.component';
import { ListDigimonComponent } from './components/dashboard/list-digimon/list-digimon.component';
import { SpinnerComponent } from './components/dashboard/spinner/spinner.component';
import { CardDigimonComponent } from './components/dashboard/list-digimon/card-digimon/card-digimon.component';
import { SearchBarComponent } from './components/dashboard/list-digimon/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LayoutComponent,
    DigimonComponent,
    ListDigimonComponent,
    SpinnerComponent,
    CardDigimonComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
