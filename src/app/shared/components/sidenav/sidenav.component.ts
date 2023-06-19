import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

import { navItems } from '../../constants/menu';

import { NavItem, SidenavToggle } from '../../interfaces/menu.interface';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}), animate('350ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}), animate('350ms', style({opacity: 0}))
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({transform: 'rotate(0)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'}),
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggle: EventEmitter<SidenavToggle> = new EventEmitter();

  navItems: NavItem[] = navItems;

  collapsed: boolean = true;
  screenWidth: number = 0;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = true;
      this.emmitEvent();
    }
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.emmitEvent();
  }

  closeSidenav() {
    this.collapsed = false;
    this.emmitEvent();
  }


  emmitEvent() {
    this.onToggle.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

}
