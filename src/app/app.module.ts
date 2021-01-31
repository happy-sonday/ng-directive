import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifTestComponent } from './ngif-test/ngif-test.component';
import { NgforTestComponent } from './ngfor-test/ngfor-test.component';
import { NgswitchTestComponent } from './ngswitch-test/ngswitch-test.component';
import { FormsModule } from '@angular/forms';
import { NgclassTestComponent } from './ngclass-test/ngclass-test.component';
import { NgstyleTestComponent } from './ngstyle-test/ngstyle-test.component';
import { GeekMarkerPipe } from './geek-marker.pipe';
import { HonorPipe } from './honor.pipe';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { DatePipe } from '@angular/common';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifTestComponent,
    NgforTestComponent,
    NgswitchTestComponent,
    NgclassTestComponent,
    NgstyleTestComponent,
    GeekMarkerPipe,
    HonorPipe,
    PipeTestComponent,
    DatePipeComponent,
    CurrencyPipeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
