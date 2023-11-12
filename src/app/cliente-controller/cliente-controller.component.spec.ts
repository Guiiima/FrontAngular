import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteControllerComponent } from './cliente-controller.component';

describe('ClienteControllerComponent', () => {
  let component: ClienteControllerComponent;
  let fixture: ComponentFixture<ClienteControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
