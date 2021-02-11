import { Contact } from './../model/Contact';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServices {

  constructor(
    public http : HttpClient
  ) { }

  findAll() : Observable<any>{
    return this.http.get(`http://localhost:8080/contact`);
  }  
  
  getMoreUsers(qauntity : Number) : Observable<any>{
    return this.http.get(`http://localhost:8080/contact/buscar/${qauntity}`);
  }

  deleteContact(id : Number) {
    return this.http.delete(`http://localhost:8080/contact/${id}`);
  }

  addContact(contact : Contact) {
    return this.http.post(`http://localhost:8080/contact` , contact);
  }

  favoriteContact(contact : Contact){
    return this.http.post(`http://localhost:8080/contact` , contact);
  }

}
