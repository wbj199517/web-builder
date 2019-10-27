import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';



import { RuntimeContentComponent } from './runtime-content.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,

        RuntimeContentComponent,
        
    ],
    entryComponents: [
  
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }