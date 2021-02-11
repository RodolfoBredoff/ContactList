import { SharedServices } from '../../service/SharedServices';
import { Contact } from '../../model/Contact';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor( private service : SharedServices, private toast : ToastrService) { }
  
  contacts : Array<Contact> ;
  searchText;

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.service.findAll().subscribe( res=> this.contacts = res );
  }
  
  filterUsers(){
    if(this.searchText.length == 0){
      return this.loadUsers()
    }

    this.contacts  = this.contacts.filter(contact => contact.name.first.includes(this.searchText))
  }

  async deleteContact(id : Number){
    this.toast.error("Contato deletado!", "");
    await this.service.deleteContact(id).subscribe(res => this.loadUsers());
  }

  favoriteContact(contact :Contact ) {
    contact.favorited = !contact.favorited;
  
    let message = contact.favorited ? "favoritado(a)!" : " removido(a) dos favoritos!"
    return this.service.favoriteContact(contact).subscribe(res => 
      this.toast.info(contact.name.first + " " + contact.name.last + " foi " + message, "") 
      );
  }

}
