import { Component, OnInit } from '@angular/core';
import{ServiceService } from '../service.service';
import{ About } from '../service';
import{ FormBuilder, FormGroup,FormControl ,Validators} from '@angular/forms';
import{ values } from '../item';
import{ CountryList } from '../service';
import{ Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers : [ServiceService]

})
export class AboutComponent implements OnInit {
  error:boolean;
 countries:CountryList[];
 selectedcountries:object={};
 

 chkCurr: boolean = false;
 cursorOnCurreField :number=0;

 test:boolean=false;
 test1:boolean=false;
  test2:boolean=false;
  test3:boolean=false;
  test4:boolean=false;
  test5:boolean=false;
  test6:boolean=false;
  test7:boolean=false; 

  userform:FormGroup;

  //    userform = new FormGroup({       
  //   country_name : new FormControl(''),
  //   short_code : new FormControl('' ),
  //   country_code : new FormControl(''),
  //   currency : new FormControl('',Validators.required),
  //   currencycode : new FormControl(''),
  //   currencysign : new FormControl(''),
  //   rate : new FormControl(''),
  //   vat:new FormControl(''),
  //   a1:new FormControl(''),
  //   a2:new FormControl(''),
  //   a3:new FormControl(''),
  //   a4:new FormControl(''),
  //   a5:new FormControl(''),
  //   a6:new FormControl(''),
  //   a7:new FormControl(''),
  //   a8:new FormControl(''),
  //   a9:new FormControl(''),
  //   a10:new FormControl(''),
  //   a11:new FormControl(''),
  //   a12:new FormControl(''),
  //   a13:new FormControl(''),
  //   a14:new FormControl(''),
  //   a15:new FormControl(''),
  //   a16:new FormControl(''),
  //   a17:new FormControl(''),
  //   a18:new FormControl(''),
  //   a19:new FormControl(''),
  //   a20:new FormControl(''),
  //   a21:new FormControl('') 
  // });
 

  
  
  constructor(private ServiceService : ServiceService, private router: Router,private formBuilder: FormBuilder ) {}
 
  validataCountry 
  // empty(oo){
  //   if(typeof oo != 'undefined' && oo){

  //     error : true
      
  //   console.log(this.error)
  //   }else{
  //     error:'skaslklf'
  //   }
    
  // }
 
  errorMessage='country already exits';
  // textAreaEmpty(obj)
  // {
  //   this.cursorOnCurreField = 1;

  //   console.log("test"+obj)
  //   if ( typeof obj !='undefined' && obj) {
  //     this.chkCurr = true
  //     console.log(this.chkCurr)
  //   }
  //   else {
  //     this.chkCurr = false
  //     console.log(this.chkCurr)
  //   }
  
  // }

  onChangeObj(newObj) {
    
   // this.cursorOnCurreField = 1;

     
     this.ServiceService.validateCountry(newObj.name)
         .subscribe(res=> this.validataCountry = res,
         
            error => this.errorMessage = <any>error,
  
          ) } 

  addContacts({ value, valid }: { value: values, valid: boolean }){ 
      this.ServiceService.addContact(JSON.stringify(value)); 
      this.router.navigate(['/viewcountry']);
      setTimeout(function() {alert ("Record Inserted Successfully"); }, 200);
  }
  
  ngOnInit() {
  this.ServiceService.getcountries().subscribe((countryData)=>this.countries=countryData);
  this.userform = this.formBuilder.group({       
    country_name : ['', Validators.required],
    short_code : [],
    country_code : [],
    currency :['', Validators.required],
    currencycode : [],
    currencysign :[],
    rate : ['', Validators.required],
    vat:[],
    a1:[],
    a2:[],
    a3:[],
    a4:[],
    a5:[],
    a6:[],
    a7:[],
    a8:[],
    a9:[],
    a10:[],
    a11:[],
    a12:[],
    a13:[],
    a14:[],
    a15:[],
    a16:[],
    a17:[],
    a18:[],
    a19:[],
    a20:[],
    a21:[]
  });
 
  }
  

    //console.log("Form values"+JSON.stringify(newContact))
  //  / this.ServiceService.addContact(newContact)
  //   .subscribe(contact => {
  //     this.contacts.push(contact);
  //     this.ServiceService.getContacts()
  //   .subscribe(contacts =>  
  //     this.contacts = contacts);
 
  //   });
  // }
 
 

}



