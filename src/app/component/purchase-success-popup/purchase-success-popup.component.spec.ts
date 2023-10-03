import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSuccessPopupComponent } from './purchase-success-popup.component';

describe('PurchaseSuccessPopupComponent', () => {
  let component: PurchaseSuccessPopupComponent;
  let fixture: ComponentFixture<PurchaseSuccessPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseSuccessPopupComponent]
    });
    fixture = TestBed.createComponent(PurchaseSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
