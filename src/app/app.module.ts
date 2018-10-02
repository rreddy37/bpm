import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

// App Component
import { AppComponent } from './app.component';

// routing declarations
import { routing } from './app.routing';

// Other Base Path components 
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BatchjobsComponent } from './batchjobs/batchjobs.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';

// services, directives etc...
import {AlertService, AuthenticationService, UserService, BatchjobsService} from './_services/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BatchjobsComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    BatchjobsService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
