import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerControllerComponent } from './worker-controller.component';

describe('WorkerControllerComponent', () => {
  let component: WorkerControllerComponent;
  let fixture: ComponentFixture<WorkerControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
