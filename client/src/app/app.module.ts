import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { routes} from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import{ CategoryPipe } from './pipe'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    EditComponent
    
  ],
  imports: [
    routes,
    BrowserModule,
  HttpModule ,
  FormsModule,
  ReactiveFormsModule,
  Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
