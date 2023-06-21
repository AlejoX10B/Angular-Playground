
export interface NavItem {
  routeLink:  string;
  icon?:      string;
  label:      string;
  expanded?:  boolean;
  items?:     NavItem[];
}

export interface SidenavToggle {
  screenWidth:  number;
  collapsed:    boolean;
}
