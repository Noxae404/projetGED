import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneFactureComponent } from './une-facture.component';

describe('UneFactureComponent', () => {
  let component: UneFactureComponent;
  let fixture: ComponentFixture<UneFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
