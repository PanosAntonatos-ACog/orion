import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomousComponent } from './autonomous.component';

describe('AutonomousComponent', () => {
  let component: AutonomousComponent;
  let fixture: ComponentFixture<AutonomousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
