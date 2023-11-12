import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryControllerComponent } from './library-controller.component';

describe('LibraryControllerComponent', () => {
  let component: LibraryControllerComponent;
  let fixture: ComponentFixture<LibraryControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
