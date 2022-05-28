import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/service/objects/Reservation';
import { ReservationServiceService } from 'src/app/service/reservation-service.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.scss'],
})
export class UserReservationsComponent implements OnInit {
  public $listOfReservations?: Observable<Reservation[]>;
  constructor(private reservationService: ReservationServiceService) {}

  ngOnInit(): void {
    this.$listOfReservations =
      this.reservationService.getAllUserReservations(1);
  }
}
