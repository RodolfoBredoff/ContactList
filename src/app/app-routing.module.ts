import { ContactsComponent } from './components/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './components/add.contact/add.contact.component';


const routes: Routes = [
  { path: '', component: ContactsComponent},
  { path: 'contatos', component: ContactsComponent},
  { path: 'adicionar', component: AddContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
