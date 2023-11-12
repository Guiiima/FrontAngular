import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierControllerComponent } from './supplier-controller.component';

describe('SupplierControllerComponent', () => {
  let component: SupplierControllerComponent;
  let fixture: ComponentFixture<SupplierControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
