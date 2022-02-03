import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToComptableComponent } from './to-comptable.component';

describe('ToComptableComponent', () => {
  let component: ToComptableComponent;
  let fixture: ComponentFixture<ToComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
