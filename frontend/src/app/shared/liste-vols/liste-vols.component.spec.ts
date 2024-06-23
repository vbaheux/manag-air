import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ListeVolsComponent } from './liste-vols.component';
import { ListeVolsParentType } from '@model/shared/listeVolsParentType.enum';

describe('ListeVolsComponent', () => {
  let component: ListeVolsComponent;
  let fixture: ComponentFixture<ListeVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeVolsComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeVolsComponent);
    component = fixture.componentInstance;
    component.parent = {
      type: ListeVolsParentType.PILOTE,
      id: 1,
      nom: 'John Doe',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
