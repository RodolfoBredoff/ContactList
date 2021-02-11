import { SharedServices } from './../../service/SharedServices';
import { Contact } from './../../model/Contact';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add.contact',
  templateUrl: './add.contact.component.html',
  styleUrls: ['./add.contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor( private service : SharedServices, private toastr : ToastrService) { }
  contacts : Array<Contact> ;
  searchText;
  
  ngOnInit() {
    this.getMoreUsers();
  }

  async addContact(contact : Contact){
    return  this.service.addContact(contact).subscribe(res => {
      this.toastr.success("Contato adicionado!" , "");
    });
  }

  getMoreUsers(){
    this.service.getMoreUsers(12).subscribe( res=> this.contacts = res[0].results );
  }
  
  filterUsers(){
    if(this.searchText.length == 0){
      return this.getMoreUsers()
    }

    this.contacts  = this.contacts.filter(contact => contact.name.first.includes(this.searchText))
  }

}
