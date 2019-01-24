import { Injectable } from '@angular/core';

export class MenuItem {
  id: number;
  routePath: string;
  title: string;
  order: number;
}

@Injectable({
  providedIn: 'root'
})
export class MenuServicesService {

  constructor() {
    this.topMenu = new Array<MenuItem>();
    let  item  = new MenuItem();
    item.id = 1;
    item.routePath = '/public';
    item.title = 'Home';
    item.order = 0;
    this.topMenu.push(item);
    item  = new MenuItem();
    item.id = 2;
    item.routePath = '/admin';
    item.title = 'Admin';
    item.order = 1;
    this.topMenu.push(item);
  }
  topMenu: Array<MenuItem>;
}
