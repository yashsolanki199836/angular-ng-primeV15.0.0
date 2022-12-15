import { Component, VERSION } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
})
export class CarComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  selectdata(product) {
    this.ref.close(product);
  }
}
