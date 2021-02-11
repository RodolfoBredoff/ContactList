import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _location: Location) { }

  logoPuc = "https://www.assespro-mg.org.br/wp-content/uploads/2020/04/logo-pucminas.png"

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }
}
