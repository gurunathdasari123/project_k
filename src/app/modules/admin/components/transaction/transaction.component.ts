import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  item=""
  phoneNumber=""
  amount=""
  error:any
transaction=this.fb.group(
  {
    item:['',[Validators.required]],
    phoneNumber:['',[Validators.required]],
    amount:['',[Validators.required]],
  }
)
  ngOnInit(): void {
  }
  user:any
  value:any

onPay(){

  this.user=this.transaction.value
  let users=[]
  if(localStorage.getItem('transaction')){
    
    users=JSON.parse(localStorage.getItem('transaction') || '{}' )
    users=[this.user,...users]
  }
  else{
    users=[this.user]
  }
   localStorage.setItem('transaction',JSON.stringify(users))
   console.log(users)
   

}
/* this.user=this.registerForm.value
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
this.router.navigate(['/login']) */}