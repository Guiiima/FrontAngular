import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRoomControllerComponent } from './study-room-controller.component';

describe('StudyRoomControllerComponent', () => {
  let component: StudyRoomControllerComponent;
  let fixture: ComponentFixture<StudyRoomControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyRoomControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudyRoomControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
