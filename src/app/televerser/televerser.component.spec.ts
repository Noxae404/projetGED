import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleverserComponent } from './televerser.component';

describe('TeleverserComponent', () => {
  let component: TeleverserComponent;
  let fixture: ComponentFixture<TeleverserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleverserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
