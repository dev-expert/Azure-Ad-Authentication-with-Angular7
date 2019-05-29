import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { AdalService } from './services/adal.service';
const routes: Routes = [

  { path: 'login', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
