import { Component, OnInit } from '@angular/core';
import{ServiceService } from '../service.service';
import{ About } from '../service';
import { Router , ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
   contact : About;
  contacts : About[]; 
  constructor(private ServiceService : ServiceService, private router: Router, private route: ActivatedRoute ) { }
 
  
 

  deleteTask(id){
    var contact = this.contact;

    this.ServiceService. deleteTask(id).subscribe(contact=> {
      if(contact.n == 1){
        for(var i=0 ; i< contact.length; i++ ){
          if(contact[i]._id == id ){
            contact.splice(i,1);
          }
          
        }
      }

      
      this.ServiceService.getContacts()
      .subscribe(contacts =>  
        this.contacts = contacts);

    });
  }
 
	  
  ngOnInit() {
    this.ServiceService.getContacts()
    .subscribe(contacts =>  
      this.contacts = contacts); 
  }

}
