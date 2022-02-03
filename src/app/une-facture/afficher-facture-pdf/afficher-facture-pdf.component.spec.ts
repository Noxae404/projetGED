import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFacturePDFComponent } from './afficher-facture-pdf.component';

describe('AfficherFacturePDFComponent', () => {
  let component: AfficherFacturePDFComponent;
  let fixture: ComponentFixture<AfficherFacturePDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFacturePDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherFacturePDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
