import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends HttpClient {
  public getUrl(url: string) {
    return environment.apiUrl ? environment.apiUrl + url : url;
  }
}
