import { Component, OnInit } from '@angular/core';

import { CalendarEvent, CalendarView } from 'angular-calendar';
import { NgbDateStruct, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { ReservationServiceService } from '../service/reservation-service.service';
import { Reservation } from '../objects/Reservation';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  constructor(private reservationService: ReservationServiceService) {}
  model!: NgbDateStruct;
  time!: number;
  view: CalendarView = CalendarView.Month;
  username: string = '';
  newEvent!: CalendarEvent;
  events: CalendarEvent[] = [
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event',
    // },
  ];
  selectedEvent: CalendarEvent = { title: '', start: startOfDay(new Date()) };

  viewDate: Date = new Date();
  currentReservation = {} as Reservation;
  clickedDate!: Date;

  clickedColumn!: number;
  ngOnInit(): void {}

  addReservation(): void {
    this.events = [
      // ...this.events,
      {
        title: this.username,
        start: this.clickedDate,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }
  changeDay(date: Date) {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }
  changInput(value: string) {
    this.username = value;
    this.events[0].title = value;
  }

  createReservation() {
    console.log(this.currentReservation);
    this.currentReservation.dateReservation = this.clickedDate;
    this.currentReservation.studentId = 1;
    this.reservationService.addNewReservation(this.currentReservation);
    this.reservationService
      .addNewReservation(this.currentReservation)
      .subscribe((response: Reservation) => {
        console.log(response);
      });
  }
}
