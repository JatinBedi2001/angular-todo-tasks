import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  title='ReactiveForms';
  reactiveForm: FormGroup;
ngOnInit(){
  this.reactiveForm=new FormGroup({
   firstname:new FormControl('',[Validators.required,this.nospaceAllowed]),
   lastname:new FormControl('',[Validators.required,this.nospaceAllowed]),
   email:new FormControl('',[Validators.required,Validators.email])
  })
} 
onSubmit(){
  console.log(this.reactiveForm);
}
nospaceAllowed(control:FormControl){        ///custom validator
   if(control.value!=null && control.value.indexOf(' ')!=-1){
     return {nospaceAllowed:true}
   }
   return null;
}
}
