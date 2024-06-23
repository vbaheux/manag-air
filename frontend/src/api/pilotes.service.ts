import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PiloteWithVolsDto } from '@model/dto/piloteWithVols.dto';
import { PiloteDto } from '@model/dto/pilote.dto';

@Injectable({
  providedIn: 'root',
})
export class PilotesService {
  constructor(private api: ApiService) {}

  findAll(): Observable<PiloteDto[]> {
    return this.api.get<PiloteDto[]>(this.api.getUrl('/pilotes'));
  }

  findById(id: number): Observable<PiloteWithVolsDto | null> {
    return this.api.get<PiloteWithVolsDto | null>(
      this.api.getUrl(`/pilotes/${id}`),
    );
  }
}
