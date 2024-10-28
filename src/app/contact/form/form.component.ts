import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { icontact } from '../../interfaces/icontact';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute= inject(ActivatedRoute);
contactForm= this.formBuilder.group({
  firstname:['', [Validators.required]],
  lastname:['', [Validators.required]],
  email:['', [Validators.required, Validators.email]],
  phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
});
  contactList: icontact[]=[];
  httpService = inject (HttpService);
  contactId!: number;
isEdit = false;
  ngOnInit(){
    this.contactId = this.activatedRoute.snapshot.params['id'];
    if(this.contactId){
      this.isEdit = true;
      this.httpService.getContact(this.contactId).subscribe(result=>{
        console.log(result);
        this.contactForm.patchValue(result);
      });
    }
   
    } 
    
    save(){
      const contact: icontact={
        firstname:this.contactForm.value.firstname!,
        lastname:this.contactForm.value.lastname!,
        email:this.contactForm.value.email!,
        phone:this.contactForm.value.phone!,
      };
      console.log(this.contactForm.value);
 if(this.isEdit){
  this.httpService.updateContact(this.contactId, contact).subscribe(()=>{
    console.log("Successfull");
    this.router.navigateByUrl("/contact/list");
  });
 }
 else{
  this.httpService.createContact(contact).subscribe(()=>{
    console.log("Successfull");
    this.router.navigateByUrl("/contact/list");
  });
 }
    }
    
    
    
}
