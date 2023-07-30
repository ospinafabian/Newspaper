import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherComponent } from './views/weather/weather.component';
import { SportsComponent } from './views/sports/sports.component';
import { HomeComponent } from './views/home/home.component';
import { SubscribeComponent } from './views/subscribe/subscribe.component';
import { BusinessComponent } from './views/business/business.component';
import { HealthComponent } from './views/health/health.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FooterComponent,
    WeatherComponent,
    SportsComponent,
    HomeComponent,
    SubscribeComponent,
    BusinessComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
