import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventControllerComponent } from './event-controller.component';

describe('EventControllerComponent', () => {
  let component: EventControllerComponent;
  let fixture: ComponentFixture<EventControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
