import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animations } from './animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [Animations]
})
export class PopupComponent implements OnInit {

  @Input() isDismissible = true;

  @Output() closePopup: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.closePopup.emit();
  }

  onOverlayClick(): void {
    if (this.isDismissible) {
      this.close();
    }
  }


}
