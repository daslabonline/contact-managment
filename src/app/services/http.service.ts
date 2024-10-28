import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { icontact } from '../interfaces/icontact';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl="http://localhost:3000";
  http= inject(HttpClient);
  constructor() { }

  getAllContact(){
    return this.http.get<icontact[]>(this.apiUrl+"/contacts")
  }
  getContact(contactId:number){
    return this.http.get<icontact>(this.apiUrl+"/contacts/"+contactId)
  }
  createContact(contact: icontact){
    return this.http.post<icontact[]>(this.apiUrl+"/contacts/",contact )
  }
  updateContact(contactId:number, contact: icontact){
    return this.http.put<icontact>(this.apiUrl+"/contacts/"+contactId, contact)
  }
  deleteContact(contactId?:number){
    return this.http.delete(this.apiUrl+"/contacts/"+contactId)
  }
}
