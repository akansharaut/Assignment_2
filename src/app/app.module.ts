import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HobbyChildComponent } from './hobby/hobby-child/hobby-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HobbyComponent,
    HobbyChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
