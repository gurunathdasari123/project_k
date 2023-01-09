import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
name=""
email=""
password=""
phoneNumber=""
error:any
  ngOnInit(): void {
  }
registerForm=this.fb.group({
  name:[null,[Validators.required]],
  email:[null,[Validators.required]],
  password:[null,[Validators.required]],
  phoneNumber:[null,[Validators.required,Validators.maxLength(11),Validators.minLength(10)]],
})
user:any
lion:any
onSubmit(){

 let jeep=(JSON.parse(localStorage.getItem('projectK') || '{}'))
 this.lion=jeep.find((x:any) => x.phoneNumber===this.phoneNumber )
 if(this.lion){
  this.error="this mobile number already exist.use New Number"
 }
 else{
  this.user=this.registerForm.value
  let users=[]
  if(localStorage.getItem('projectK')){
    
    users=JSON.parse(localStorage.getItem('projectK') || '{}' )
    users=[this.user,...users]
  }
  else{
    users=[this.user]
  }
   localStorage.setItem('projectK',JSON.stringify(users))
   console.log(users)
   this.router.navigate(['/login'])

 }

 
}



 

 }
  
 
