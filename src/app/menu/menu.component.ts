import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: string[] = ['Home', 'Users', 'Logout'] // public par défaut
  item:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onGo() {
    this.menus.push(this.item)
  }
}
