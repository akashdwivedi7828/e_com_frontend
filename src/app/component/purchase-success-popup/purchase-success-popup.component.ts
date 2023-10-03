import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-purchase-success-popup',
  templateUrl: './purchase-success-popup.component.html',
  styleUrls: ['./purchase-success-popup.component.css']
})
export class PurchaseSuccessPopupComponent {
  @Input() showSuccessPopup = false;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}

