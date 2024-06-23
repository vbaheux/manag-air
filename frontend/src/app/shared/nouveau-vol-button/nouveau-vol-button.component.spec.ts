import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauVolButtonComponent } from './nouveau-vol-button.component';

describe('NouveauVolButtonComponent', () => {
  let component: NouveauVolButtonComponent;
  let fixture: ComponentFixture<NouveauVolButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauVolButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauVolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
