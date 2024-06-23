import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ListeVolsParentType } from '@model/shared/listeVolsParentType.enum';
import { AvionWithVolsDto } from '@model/dto/avionWithVols.dto';
import { AvionsService } from '@api/avions.service';
import { NouveauVolButtonComponent } from '@app/shared/nouveau-vol-button/nouveau-vol-button.component';
import { ListeVolsComponent } from '@app/shared/liste-vols/liste-vols.component';
import { ListeVolsParent } from '@model/shared/listeVolsParent.interface';

@Component({
  selector: 'app-detail-avion',
  standalone: true,
  imports: [ListeVolsComponent, MatIcon, NouveauVolButtonComponent],
  templateUrl: './detail-avion.component.html',
  styleUrl: './detail-avion.component.scss',
})
export class DetailAvionComponent {
  avion?: AvionWithVolsDto;
  volsParent?: ListeVolsParent;

  constructor(
    private route: ActivatedRoute,
    private avionsService: AvionsService,
  ) {}

  getAvion(id: number): void {
    this.avionsService.findById(id).subscribe((avion) => {
      if (avion) {
        this.avion = avion;
        this.volsParent = {
          type: ListeVolsParentType.AVION,
          id: avion.id,
          nom: avion.nom,
        };
      }
    });
  }

  ngOnInit() {
    const avionId = Number(this.route.snapshot.params['id']);
    this.getAvion(avionId);
  }
}
