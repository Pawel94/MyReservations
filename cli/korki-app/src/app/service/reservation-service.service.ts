import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from './objects/Reservation';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root',
})
export class ReservationServiceService {
  private URL = environment.apiBaseUrl;
  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService
  ) {}

  addNewReservation(reservation: Reservation | null): Observable<Reservation> {
    const body = JSON.stringify(reservation);
    console.log(body);

    return this.httpClient
      .post<Reservation>(`${this.URL}/reservation/add`, reservation)
      .pipe(
        tap((res) => {
          this.notificationService.setSuccessMessage('Reserwacja powiodła się');
        }),
        catchError((err) => {
          this.notificationService.setErrorMessage(
            'Rezerwacja nie powiodła sie'
          );
          return EMPTY;
        })
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
      .subscribe(() => {
        this.notificationService.setSuccessMessage('Update - rezerwacji');
      });
  }
  deleteReservation(reservation: Reservation) {
    const id = reservation.id;

    return this.httpClient
      .delete<Reservation>(`${this.URL}/reservation/delete/${id}`)
      .subscribe((data) => {
        console.log(data);
        this.notificationService.setSuccessMessage('Usunięta rezerwacja się');
      });
  }
}
