import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoControllerComponent } from './emprestimo-controller.component';

describe('EmprestimoControllerComponent', () => {
  let component: EmprestimoControllerComponent;
  let fixture: ComponentFixture<EmprestimoControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimoControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmprestimoControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
