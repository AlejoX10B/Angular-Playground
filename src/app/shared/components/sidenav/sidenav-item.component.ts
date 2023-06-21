import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { NavItem } from '../../interfaces/menu.interface';


@Component({
  selector: 'app-sidenav-item',
  template: `
    <ul *ngIf="!collapsed && data.items && data.items.length > 0"
        [@submenu]="expanded 
          ? { value: 'visible', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'} }
          : { value: 'hidden', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'} }
        "
        class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a *ngIf="item.items && item.items.length > 0"
            (click)="handleClick(item)"
            class="sublevel-nav-link">
            <i class="sublevel-link-icon bi bi-dot"></i>
            <span *ngIf="!collapsed" class="sublevel-link-text">
              {{ item.label }}
            </span>
            <i *ngIf="!collapsed && item.items" class="nav-collapse-icon"
                [ngClass]="!item.expanded ? 'bi bi-caret-down-fill' : 'bi bi-caret-up-fill'"></i>
        </a>
        <a *ngIf="!item.items || (item.items && item.items.length == 0)"
            [routerLink]="[item.routeLink]"
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active-sublevel"
            class="sublevel-nav-link">
            <i class="sublevel-link-icon bi bi-dot"></i>
            <span *ngIf="!collapsed" class="sublevel-link-text">
              {{ item.label }}
            </span>
         </a>
         <div *ngIf="item.items && item.items.length > 0">
          <app-sidenav-item [collapsed]="collapsed"
                            [multiple]="multiple"
                            [expanded]="item.expanded">
          </app-sidenav-item>
         </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.sass'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: 0,
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [
        style({overflow: 'hidden'}),
        animate('{{transitionParams}}')
      ]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SidenavItemComponent {

  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;

  @Input() collapsed: boolean = false;
  @Input() multiple: boolean = false;

  @Input() data: NavItem = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }

  handleClick(item: NavItem) {

    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }

    item.expanded = !item.expanded;
  }

}
