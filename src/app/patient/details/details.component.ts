import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dataarray=[];

  firstname:any;
  lastname:any;
  phone:any;
  emailid:any; 
  Address1:any
  Address2:any;
  cityname:any;
  Statename:any; 
  zipcode:any;
  submitted:false;
  
  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      fname:  ['',[Validators.required, Validators.pattern("^[a-zA-Z\s]+$")] ],
      lname:  ['',[Validators.required, Validators.pattern("^[a-zA-Z\s]+$")]],
      phn:  ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      email:  ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$")]],
      add1 :['',[Validators.required ] ],
      add2 :['',[Validators.required] ],
      city:   ['',[Validators.required, Validators.pattern("^[a-zA-Z\s]+$")] ],
      state: ['',[Validators.required, Validators.pattern("^[a-zA-Z\s]+$")] ],
      zip:['',[Validators.required, Validators.pattern("^[/^\d{5}(-\d{4})?(?!-)$/]+$"),Validators.minLength(6), Validators.maxLength(6)] ],
    })
  }
  
 

  ngOnInit(): void {
    this.dataarray = [];
  }
  get f() { return this.form.controls; }

  
  submit() {
        
this.dataarray.push(this.firstname,this.lastname,this.phone,this.emailid,this.Address1,this.Address2,this.cityname,this.Statename,this.zipcode);
console.log(this.dataarray,'array');
      // this.firstname 
        }


}
