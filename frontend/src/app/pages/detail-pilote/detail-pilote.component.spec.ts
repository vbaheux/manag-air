import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPiloteComponent } from './detail-pilote.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailPiloteComponent', () => {
  let component: DetailPiloteComponent;
  let fixture: ComponentFixture<DetailPiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailPiloteComponent,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
