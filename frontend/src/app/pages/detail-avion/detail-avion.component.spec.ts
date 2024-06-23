import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAvionComponent } from './detail-avion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailAvionComponent', () => {
  let component: DetailAvionComponent;
  let fixture: ComponentFixture<DetailAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailAvionComponent,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
