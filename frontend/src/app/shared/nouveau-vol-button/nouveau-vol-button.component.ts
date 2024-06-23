import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { NouveauVolDialogComponent } from '../nouveau-vol-dialog/nouveau-vol-dialog.component';
import { VolDto } from '@model/dto/vol.dto';
import { ListeVolsParent } from '@model/shared/listeVolsParent.interface';

@Component({
  selector: 'app-nouveau-vol-button',
  standalone: true,
  imports: [MatFabButton, MatIcon],
  templateUrl: './nouveau-vol-button.component.html',
  styleUrl: './nouveau-vol-button.component.scss',
})
export class NouveauVolButtonComponent {
  @Input({ required: true }) parent?: ListeVolsParent;

  @Output() save: EventEmitter<VolDto | undefined> = new EventEmitter<
    VolDto | undefined
  >();

  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    const dialogRef = this.dialog.open(NouveauVolDialogComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.parent,
    });

    dialogRef.afterClosed().subscribe((newVol: VolDto | undefined) => {
      if (newVol) {
        this.save.emit(newVol);
      }
    });
  }
}
