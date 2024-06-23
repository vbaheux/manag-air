import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauVolDialogComponent } from './nouveau-vol-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NouveauVolDialogComponent', () => {
  let component: NouveauVolDialogComponent;
  let fixture: ComponentFixture<NouveauVolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NouveauVolDialogComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauVolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
