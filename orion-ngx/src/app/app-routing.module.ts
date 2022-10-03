import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { NetMeteringComponent } from './net-metering/net-metering.component';
import { AutonomousComponent } from './autonomous/autonomous.component';
import { SolarPanelComponent } from './solar-panel/solar-panel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'net', component: NetMeteringComponent },
  { path: 'auto', component: AutonomousComponent },
  { path: 'solar', component: SolarPanelComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
