package com.korki.korkibackend.service;

import com.korki.korkibackend.model.Reservation;
import com.korki.korkibackend.model.Student;
import com.korki.korkibackend.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class ReservationService {

    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public List<Reservation> findAllReservationsByStudentId(Long studentId) {
        return reservationRepository.findReservationByStudentId(studentId);
    }

    public List<Reservation> findAllReservations() {

        return reservationRepository.findAll();
    }

    public void addReservation(Reservation reservation) {
        reservation.setStudentCode(UUID.randomUUID().toString());
        reservationRepository.save(reservation);
    }
    public void updateReservation(Reservation reservation) {
        reservationRepository.save(reservation);
    }
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }
}
