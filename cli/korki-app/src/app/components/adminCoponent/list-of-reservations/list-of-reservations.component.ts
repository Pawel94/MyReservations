import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/service/objects/Reservation';
import { ReservationServiceService } from 'src/app/service/reservation-service.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-list-of-reservations',
  templateUrl: './list-of-reservations.component.html',
  styleUrls: ['./list-of-reservations.component.scss'],
})
export class ListOfReservationsComponent implements OnInit {
  public $listOfReservations?: Observable<Reservation[]>;
  constructor(
    private reservationService: ReservationServiceService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.$listOfReservations = this.reservationService.getAllReservations();
  }

  getStatus(status: boolean): String {
    return this.utilsService.getPaymentStatus(status);
  }
  setStatus(reservation: Reservation) {
    reservation.lessonState = !reservation.lessonState;
    this.reservationService.updateReservation(reservation);
  }
  deleteReservation(reservation: Reservation) {
    this.reservationService.deleteReservation(reservation);
  }
}
