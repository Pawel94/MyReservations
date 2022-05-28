package com.korki.korkibackend.repository;

import com.korki.korkibackend.model.Reservation;
import com.korki.korkibackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findReservationByStudentId(Long id);
}
