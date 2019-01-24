import { Component, OnInit } from '@angular/core';
import {MenuItem, MenuServicesService} from '../../../services/menu-services.service';

@Component({
  selector: 'holsapple-life-public-menu',
  templateUrl: './public-menu.component.html',
  styleUrls: ['./public-menu.component.css']
})
export class PublicMenuComponent implements OnInit {
  topMenu: Array<MenuItem>;

  constructor( public menuService: MenuServicesService) { }

  ngOnInit() {
    this.topMenu = this.menuService.topMenu;
  }

}
