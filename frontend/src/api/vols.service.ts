import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { VolDto } from '@model/dto/vol.dto';
import { ICreateVolDto } from '@model/dto/ICreateVol.dto';

@Injectable({
  providedIn: 'root',
})
export class VolsService {
  constructor(private api: ApiService) {}

  createVol(vol: ICreateVolDto): Observable<VolDto> {
    return this.api.post<VolDto>(this.api.getUrl('/vols'), vol);
  }
}
