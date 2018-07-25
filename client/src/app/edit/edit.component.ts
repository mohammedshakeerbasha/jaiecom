import { Component, OnInit , Input} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import{ About } from '../service';
import{ values } from '../item';
import{ FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit { 
  formvalues=null;
 
  a13:boolean=true; 
  a14:boolean=true; 
  a15:boolean=true; 
  a16:boolean=true; 
  a17:boolean=true; 
  a18:boolean=true; 

userkform = new FormGroup({       
  country_name : new FormControl(),
    short_code : new FormControl( ),
    country_code : new FormControl(),
    currency : new FormControl(),
    currencycode : new FormControl(),
    currencysign : new FormControl(),
    rate : new FormControl(),
    vat:new FormControl(),
    a1:new FormControl(),
    a2:new FormControl(),
    a3:new FormControl(),
    a4:new FormControl(),
    a5:new FormControl(),
    a6:new FormControl(),
    a7:new FormControl(),
    a8:new FormControl(),
    a9:new FormControl(),
    a10:new FormControl(),
    a11:new FormControl(),
    a12:new FormControl(),
    a13:new FormControl(),
    a14:new FormControl(),
    a15:new FormControl(),
    a16:new FormControl(),
    a17:new FormControl(),
    a18:new FormControl(),
    a19:new FormControl(),
    a20:new FormControl(),
    a21:new FormControl() 


});

data:{}
id:string=''
  constructor( private ServiceService: ServiceService, private router: Router, private route: ActivatedRoute ) { }
 
  updatecountry({value} : {value:values}){ 

    this.formvalues=JSON.stringify(value)

    this.ServiceService.updatecountry(this.formvalues,this.id)
   
    this.router.navigate(['/viewcountry']);
      
}
  ngOnInit()   {
  
     this.id =this.route.snapshot.params['id']


    this.data = this.ServiceService.selectcountrybyid(this.id)
    .subscribe(res=>this.data=res)
  // }{
 
  //   this.ServiceService.update( this.newItem)
  //   .subscribe(contact =>  
  //     this.value = contact);


    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    });
  }
  
}
