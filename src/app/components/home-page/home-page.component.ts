import { Component, OnInit } from '@angular/core';
import { SharedServices } from '../../service/SharedServices';
import { Contact } from '../../model/Contact';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private service : SharedServices
  ) { }

  ngOnInit() {


  }


}
