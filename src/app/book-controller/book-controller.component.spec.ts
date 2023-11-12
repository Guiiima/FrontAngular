import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookControllerComponent } from './book-controller.component';

describe('BookControllerComponent', () => {
  let component: BookControllerComponent;
  let fixture: ComponentFixture<BookControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
