import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { SportsComponent } from '../views/sports/sports.component';
import { WeatherComponent } from '../views/weather/weather.component';
import { SubscribeComponent } from '../views/subscribe/subscribe.component';
import { BusinessComponent } from '../views/business/business.component';
import { HealthComponent } from '../views/health/health.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'weather', component: WeatherComponent},
  {path:'sports', component: SportsComponent},
  {path:'subscribe', component: SubscribeComponent},
  {path:'business', component: BusinessComponent},
  {path:'health', component: HealthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
