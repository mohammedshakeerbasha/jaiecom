import { Injectable } from '@angular/core';
import{ Http, Headers,RequestOptions} from '@angular/http';
 import { values } from './item';
import 'rxjs/add/operator/map';
import{ Observable } from 'rxjs/Observable';
import{ CountryList } from './service';
import{ Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

  constructor(private http : Http , private router: Router)  { }

  validateCountry(country_name)
  
  { 
    let headers       = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
 
    return this.http.post('api/count/',{"country_name":country_name},options)
        .map(res => res.json())
       
        
  } 
    
 
  getcountries():Observable<CountryList[]>{    
    return this.http.get('assets/countries.json')
    .map(res=> res.json()); 
  }
 
  getContacts(){
    
    return this.http.get('api/viewcountry')
    .map(res=> res.json());
  }
 
  addContact(newContact){
    
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });      
    return this.http.post('api/addcountry',newContact,options)
    .subscribe();
  
  } 
 
  deleteTask(id){
    return this.http.delete('api/delete/' +id)
    .map(res => res.json());
  }

  
  selectcountrybyid(newItem){    
    return this.http.get('api/update/'+newItem )
    .map(res => res.json());
  }


  updatecountry(data,id){   
    console.log("updatevalues"+data,"updatedid"+id)
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });  
    return this.http.put('api/update/'+id,data,options )
   .subscribe(data=>{
     console.log("mm"+data);
   })
  
  }

}
