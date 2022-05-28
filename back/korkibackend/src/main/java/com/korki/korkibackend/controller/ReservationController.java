package com.korki.korkibackend.controller;

import com.korki.korkibackend.model.Reservation;
import com.korki.korkibackend.model.Student;
import com.korki.korkibackend.service.ReservationService;
import com.korki.korkibackend.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {
    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public ResponseEntity<List<Reservation>> getAllStudents() {
        List<Reservation> listOfStudents = reservationService.findAllReservations();
        return new ResponseEntity<>(listOfStudents, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/find/{id}")
    public ResponseEntity<List<Reservation>> getAllStudents(@PathVariable("id") Long id) {
        List<Reservation> listOfReservation = reservationService.findAllReservationsByStudentId(id);
        return new ResponseEntity<>(listOfReservation, HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public ResponseEntity<Reservation> getStudentById(@RequestBody Reservation reservation) {
        reservationService.addReservation(reservation);
        return new ResponseEntity<>(reservation, HttpStatus.OK);
    }
}
