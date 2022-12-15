import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CarComponent } from './car-componet/car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
  ],
  declarations: [AppComponent, HelloComponent, CarComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
  providers: [DialogService],
})
export class AppModule {}
