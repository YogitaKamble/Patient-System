import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  emailid:any; 
  password:any;
  submitted:false;

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private router:Router) { 

  this.form = this.fb.group({
   
    email:  ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$")]],
    pswd: ['',[Validators.required ]],
    // pswd: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$") ]],

  })

 }

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }

  submit() {
    console.log(this.emailid,this.password);
    this.router.navigate(['/patient']);

      // this.firstname 
        }

}
