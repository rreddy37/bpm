import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// App Component
import { AppComponent } from './app.component';

// routing declarations
import { routing } from './app.routing';

// Other Base Path components 
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BatchjobsComponent } from './batchjobs/batchjobs.component';

// services
import {BatchjobsService} from './_services/index'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BatchjobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    BatchjobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
