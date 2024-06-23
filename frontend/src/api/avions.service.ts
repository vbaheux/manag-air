import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AvionDto } from '@model/dto/avion.dto';
import { AvionWithVolsDto } from '@model/dto/avionWithVols.dto';

@Injectable({
  providedIn: 'root',
})
export class AvionsService {
  constructor(private api: ApiService) {}

  findAll(): Observable<AvionDto[]> {
    return this.api.get<AvionDto[]>(this.api.getUrl('/avions'));
  }

  findById(id: number): Observable<AvionWithVolsDto | null> {
    return this.api.get<AvionWithVolsDto | null>(
      this.api.getUrl(`/avions/${id}`),
    );
  }
}
