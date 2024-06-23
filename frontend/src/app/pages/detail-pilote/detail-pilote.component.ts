import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { ListeVolsParentType } from '@model/shared/listeVolsParentType.enum';
import { PiloteWithVolsDto } from '@model/dto/piloteWithVols.dto';
import { PilotesService } from '@api/pilotes.service';
import { ListeVolsComponent } from '@app/shared/liste-vols/liste-vols.component';
import { ListeVolsParent } from '@model/shared/listeVolsParent.interface';

@Component({
  selector: 'app-detail-pilote',
  standalone: true,
  imports: [ListeVolsComponent, ListeVolsComponent, MatIcon],
  templateUrl: './detail-pilote.component.html',
  styleUrl: './detail-pilote.component.scss',
})
export class DetailPiloteComponent implements OnInit {
  pilote?: PiloteWithVolsDto;
  volsParent?: ListeVolsParent;

  constructor(
    private route: ActivatedRoute,
    private pilotesService: PilotesService,
  ) {}

  getPilote(id: number): void {
    this.pilotesService.findById(id).subscribe((pilote) => {
      if (pilote) {
        this.pilote = pilote;
        this.volsParent = {
          type: ListeVolsParentType.PILOTE,
          id: pilote.id,
          nom: pilote.nom,
        };
      }
    });
  }

  ngOnInit() {
    const piloteId = Number(this.route.snapshot.params['id']);
    this.getPilote(piloteId);
  }
}
