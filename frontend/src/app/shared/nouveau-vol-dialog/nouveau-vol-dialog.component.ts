import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ListeVolsParentType } from '@model/shared/listeVolsParentType.enum';
import { PiloteDto } from '@model/dto/pilote.dto';
import { AvionDto } from '@model/dto/avion.dto';
import { PilotesService } from '@api/pilotes.service';
import { AvionsService } from '@api/avions.service';
import { VolsService } from '@api/vols.service';
import { ICreateVolDto } from '@model/dto/ICreateVol.dto';
import { VolDto } from '@model/dto/vol.dto';
import { ListeVolsParent } from '@model/shared/listeVolsParent.interface';

@Component({
  selector: 'app-nouveau-vol-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './nouveau-vol-dialog.component.html',
  styleUrl: './nouveau-vol-dialog.component.scss',
})
export class NouveauVolDialogComponent implements OnInit {
  protected readonly ListeVolsParent = ListeVolsParentType;

  newVolForm = this.formBuilder.group({
    id: ['', Validators.pattern(/^[A-Z]{2}\d{4}$/)],
    villeDepart: ['', [Validators.required, Validators.maxLength(20)]],
    villeArrivee: ['', [Validators.required, Validators.maxLength(20)]],
    heureDepart: ['', Validators.pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)],
    heureArrivee: ['', Validators.pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)],
    piloteId: [0, Validators.min(1)],
    avionId: [0, Validators.min(1)],
  });

  pilotes: PiloteDto[] = [];
  avions: AvionDto[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public parent: ListeVolsParent,
    private pilotesService: PilotesService,
    private avionsService: AvionsService,
    private volsService: VolsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NouveauVolDialogComponent>,
  ) {}

  getPilotes(): void {
    this.pilotesService
      .findAll()
      .subscribe((pilotes) => (this.pilotes = pilotes));
  }

  getAvions(): void {
    this.avionsService.findAll().subscribe((avions) => (this.avions = avions));
  }

  ngOnInit() {
    if (this.parent.type === ListeVolsParentType.PILOTE) {
      this.newVolForm.controls['piloteId'].setValue(this.parent.id);
      this.getAvions();
    } else {
      this.newVolForm.controls['avionId'].setValue(this.parent.id);
      this.getPilotes();
    }
  }

  onClose(vol?: VolDto) {
    this.dialogRef.close(vol);
  }

  onSubmit(): void {
    if (this.newVolForm.valid) {
      this.volsService
        .createVol(this.newVolForm.value as ICreateVolDto)
        .subscribe((newVol) => {
          if (newVol) {
            this.onClose(newVol);
          }
        });
    }
  }
}
