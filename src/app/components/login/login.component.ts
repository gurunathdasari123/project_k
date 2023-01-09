import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  phoneNumber=""
  password=""
  error:any
  
  
loginForm=this.fb.group({
  phoneNumber:[null,[Validators.required]],
  password:[null,[Validators.required]]
})
array:any
onLogin(){
 this.array= (JSON.parse(localStorage.getItem('projectK') || '{}' ))
 let apple=this.array.find((i:any) => i.phoneNumber===this.phoneNumber && i.password===this.password)
 if(apple){
  this.router.navigate(['admin'])
  this.auth.onDate()
 }
 else{
  this.error="enter valid credential or create Project-K account"
 }
}
}
