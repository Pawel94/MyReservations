import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from './objects/Reservation';
@Injectable({
  providedIn: 'root',
})
export class ReservationServiceService {
  private URL = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) {}

  addNewReservation(reservation: Reservation | null): Observable<Reservation> {
    const body = JSON.stringify(reservation);
    console.log(body);

    return this.httpClient.post<Reservation>(
      `${this.URL}/reservation/add`,
      reservation
    );
  }

  getAllUserReservations(userId: Number): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(
      `${this.URL}/reservation/find/${userId}`
    );
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.URL}/reservation`);
  }

  updateReservation(reservation: Reservation) {
    const body = JSON.stringify(reservation);
    console.log(body);

    return this.httpClient
      .put<Reservation>(`${this.URL}/reservation/update`, reservation)
      .subscribe((data) => {
        console.log(data);
      });
  }
  deleteReservation(reservation: Reservation) {
    const id = reservation.id;

    return this.httpClient
      .delete<Reservation>(`${this.URL}/reservation/delete/${id}`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
