import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperLowerPipeDemoComponent } from './upper-lower-pipe-demo/upper-lower-pipe-demo.component';
import { CurrencyPipeDemoComponent } from './currency-pipe-demo/currency-pipe-demo.component';
import { DatePipeDemoComponent } from './date-pipe-demo/date-pipe-demo.component';
import { JsonPipeDemoComponent } from './json-pipe-demo/json-pipe-demo.component';
import { ChainingPipesDemoComponent } from './chaining-pipes-demo/chaining-pipes-demo.component';
import { ReversestrpipePipe } from './reversestrpipe.pipe';
import { CustomePipeDemoComponent } from './custome-pipe-demo/custome-pipe-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperLowerPipeDemoComponent,
    CurrencyPipeDemoComponent,
    DatePipeDemoComponent,
    JsonPipeDemoComponent,
    ChainingPipesDemoComponent,
    ReversestrpipePipe,
    CustomePipeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
