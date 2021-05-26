import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListDigimonComponent } from './components/dashboard/list-digimon/list-digimon.component';
import { DigimonComponent } from './components/dashboard/digimon/digimon.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: ListDigimonComponent },
      { path: 'digimon/:id', component: DigimonComponent }
    ]
  },
  { path: '**', redirectTo: 'layout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
