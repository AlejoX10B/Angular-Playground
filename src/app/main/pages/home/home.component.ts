import { Component } from '@angular/core';

import { getContainerClass } from '../../../shared/constants/menu';

import { SidenavToggle } from '../../../shared/interfaces/menu.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  isNavCollapsed: boolean = false;
  screenWidth: number = 0;

  onToggle(data: SidenavToggle) {
    console.log(data)

    this.isNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

  getClass(): string {
    return getContainerClass(this.isNavCollapsed, this.screenWidth);
  }

}
