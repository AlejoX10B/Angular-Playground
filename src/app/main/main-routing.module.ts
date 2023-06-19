import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EstatesComponent } from './pages/estates/estates.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    children: [
      { path: '', title: 'Dashboard', component: DashboardComponent },
      { path: 'estates', title: 'Inmuebles', component: EstatesComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
