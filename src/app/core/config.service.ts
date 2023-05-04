import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private http: HttpClient) {}
  private travelOptionsUrl = 'http://localhost:4200/getOptions';
  public getTravelOptions = () => {
    return this.http.get(this.travelOptionsUrl, { headers: {} });
  };
}
