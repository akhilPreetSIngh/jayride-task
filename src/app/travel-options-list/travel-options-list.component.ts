import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../core/config.service';

interface Listing {
  name: string;
  pricePerPassenger: number;
  vehicleType: { maxPassengers: number; name: string };
}

@Component({
  selector: 'app-travel-options-list',
  templateUrl: './travel-options-list.component.html',
})
export class TravelOptionsListComponent implements OnInit {
  constructor(private configService: ConfigService) {}
  listing: Listing[] = [];
  listingThreePassengers: Listing[] = [];
  responseError = false;

  loadingData = true;

  totalListings = 0;
  minPrice = 0;
  maxPrice = 0;
  averagePrice = 0;

  ngOnInit() {
    try {
      this.configService.getTravelOptions().subscribe((data) => {
        this.listing = data.listings;
        this.transformData();
        this.loadingData = false;
      });
    } catch (error) {
      this.responseError = true;
      this.loadingData = false;
    }
  }

  transformData = (): void => {
    if (this.listing.length > 0) {
      this.totalListings = this.listing.length;
      const sortedList = this.listing.sort(
        (a, b) => a.pricePerPassenger - b.pricePerPassenger
      );
      this.listingThreePassengers = sortedList.slice(0, 3);
      this.minPrice = sortedList[0].pricePerPassenger;
      this.maxPrice = sortedList[sortedList.length - 1].pricePerPassenger;

      const totalPriceInListing = this.listing.reduce(
        (val, curValue) => val + curValue.pricePerPassenger,
        0
      );
      const average = totalPriceInListing / this.listing.length;
      this.averagePrice = Number(average.toFixed(2));
    }
  };
}
