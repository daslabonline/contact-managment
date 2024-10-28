import { Component, inject } from '@angular/core';
import { icontact } from '../../interfaces/icontact';
import { HttpService } from '../../services/http.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  router= inject(Router);
contactList: icontact[]=[];
  httpService = inject (HttpService);
  ngOnInit(){
    this.getContact();
    } 
    getContact(){
      this.httpService.getAllContact().subscribe((result)=>{
        this.contactList = result;
      });
    }
    edit(id:number){
      console.log(id);
      this.router.navigateByUrl("/contact-form/"+id);
    }
    delete(id?:number){
      this.httpService.deleteContact(id).subscribe(()=>{
        console.log("Deleted");
        //this.contactList= this.contactList.filter(x=>x.id!=id);
        this.getContact();
      });
      
    }
}
