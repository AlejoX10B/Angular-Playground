import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavItemComponent } from './components/sidenav/sidenav-item.component';


@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
