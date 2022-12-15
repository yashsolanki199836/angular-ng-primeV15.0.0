import { Component, VERSION } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CarComponent } from './car-componet/car.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DialogService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  ref: DynamicDialogRef;
  constructor(public dialogService: DialogService) {}

  show() {
    debugger;
    this.ref = this.dialogService.open(CarComponent, {
      data: {
        id: 'id270919998',
      },
      showHeader: false,
      // header: 'Car Component',
       width: '100%',
      // height: '100%',
      contentStyle: { overflow: 'auto' }, //'max-height': '500px',
      // footer:"footer"
      // baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((product) => {
      if (product) {
        console.log('close dynamic dialog success and OUTPUT:' + product);
        // this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
