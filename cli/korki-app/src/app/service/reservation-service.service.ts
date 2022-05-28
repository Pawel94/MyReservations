import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../objects/Reservation';
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
}
