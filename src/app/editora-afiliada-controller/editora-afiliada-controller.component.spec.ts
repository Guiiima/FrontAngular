import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraAfiliadaControllerComponent } from './editora-afiliada-controller.component';

describe('EditoraAfiliadaControllerComponent', () => {
  let component: EditoraAfiliadaControllerComponent;
  let fixture: ComponentFixture<EditoraAfiliadaControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoraAfiliadaControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditoraAfiliadaControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
