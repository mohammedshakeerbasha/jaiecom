import{ ModuleWithProviders } from '@angular/core';
import {Routes , RouterModule } from '@angular/router'; 
import{ AboutComponent } from './about/about.component';
import{ ServicesComponent } from './services/services.component';
import { EditComponent } from './edit/edit.component';



export const router : Routes =[
    { path :'', redirectTo : 'app.compnent' , pathMatch :'full'},
    { path : 'addcountry',component: AboutComponent },
    { path : 'viewcountry' , component : ServicesComponent },
    { path : 'editcountry/:id' , component : EditComponent }
];
export const routes : ModuleWithProviders = RouterModule .forRoot(router);
