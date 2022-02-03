import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodageComponent } from './decodage.component';

describe('DecodageComponent', () => {
  let component: DecodageComponent;
  let fixture: ComponentFixture<DecodageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecodageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
