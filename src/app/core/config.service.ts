import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponseData {
  from: string;
  to: string;
  listings: {
    name: string;
    pricePerPassenger: number;
    vehicleType: { maxPassengers: number; name: string };
  }[];
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private http: HttpClient) {}
  private travelOptionsUrl = 'http://localhost:4200/getOptions';

  public getTravelOptions = (): Observable<ResponseData> => {
    return this.http.get<ResponseData>(this.travelOptionsUrl);
  };
}
