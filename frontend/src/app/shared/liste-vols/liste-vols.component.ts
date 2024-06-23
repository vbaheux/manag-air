import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { VolDto } from '@model/dto/vol.dto';
import { ListeVolsParentType } from '@model/shared/listeVolsParentType.enum';
import { NouveauVolButtonComponent } from '@app/shared/nouveau-vol-button/nouveau-vol-button.component';
import { ListeVolsParent } from '@model/shared/listeVolsParent.interface';

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIcon,
    MatIconButton,
    NouveauVolButtonComponent,
  ],
  templateUrl: './liste-vols.component.html',
  styleUrl: './liste-vols.component.scss',
})
export class ListeVolsComponent implements OnInit, AfterViewInit {
  protected readonly ListeVolsParentType = ListeVolsParentType;

  @Input({ required: true }) vols: VolDto[] = [];
  @Input({ required: true }) parent?: ListeVolsParent;

  @ViewChild(MatSort) sort!: MatSort;

  filterString: string = '';
  dataSource = new MatTableDataSource<VolDto>([]);
  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = [
      'id',
      this.parent?.type === ListeVolsParentType.AVION ? 'pilote' : 'avion',
      'villeDepart',
      'heureDepart',
      'villeArrivee',
      'heureArrivee',
    ];

    this.dataSource.data = this.vols.slice();

    this.dataSource.sortingDataAccessor = (
      data: any,
      sortHeaderId: string,
    ): string | number => {
      switch (sortHeaderId) {
        case 'pilote':
          return data.pilote?.nom || '';
        case 'avion':
          return data.avion?.id || 0;
        default:
          return data[sortHeaderId];
      }
    };

    this.dataSource.filterPredicate = (data: VolDto, filter: string) => {
      const dataStr = Object.keys(data)
        .reduce((currentTerm: string, key: string) => {
          if (key === 'pilote') {
            return currentTerm + data.pilote?.nom;
          }
          if (key === 'avion') {
            return currentTerm + data.avion?.id + data.avion?.nom;
          }
          // Use an obscure Unicode character to delimit the words in the concatenated string.
          return currentTerm + (data as { [key: string]: any })[key] + '◬';
        }, '')
        .toLowerCase();

      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();

      return dataStr.indexOf(transformedFilter) != -1;
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNewVolSave(newVol?: VolDto) {
    if (newVol) {
      this.dataSource.data = [...this.dataSource.data, newVol].sort((a, b) =>
        a.id < b.id ? -1 : 1,
      );
    }
  }
}
