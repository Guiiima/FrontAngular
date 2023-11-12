import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationControllerComponent } from './reservation-controller.component';

describe('ReservationControllerComponent', () => {
  let component: ReservationControllerComponent;
  let fixture: ComponentFixture<ReservationControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
