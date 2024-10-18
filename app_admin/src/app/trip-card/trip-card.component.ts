import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { TripListingComponent } from '../trip-listing/trip-listing.component';
import { Trip } from '../models/trips';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
})
export class TripCardComponent implements OnInit{

  @Input('trip') trip: any;

  constructor(private router: Router, private tripDataService: TripDataService, private tripListing: TripListingComponent) { }
  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    this.tripDataService.deleteTrip(trip.code)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          //          location.reload();
          this.tripListing.onDelete();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    
  }
}
