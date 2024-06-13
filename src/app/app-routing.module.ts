import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { KvaraComponent } from './kvara/kvara.component';
import { SportGeorgiaComponent } from './sport-georgia/sport-georgia.component';
import { NakrebiComponent } from './nakrebi/nakrebi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"sport-georgia",
    component:SportGeorgiaComponent
  },
  {
    path:"kvara",
    component:KvaraComponent
  },
  {
    path:"nakrebi",
    component:NakrebiComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
