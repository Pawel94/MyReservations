package com.korki.korkibackend.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    private Long studentId;
    private Date dateReservation;
    private String ReservationCode;
    public Reservation(Long id, Long studentId, Date dateReservation,String reservationCode) {
        this.id = id;
        this.studentId = studentId;
        this.dateReservation = dateReservation;
        ReservationCode=reservationCode;
    }

    public Long getId() {
        return id;
    }

    public Reservation() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Date getDateReservation() {
        return dateReservation;
    }

    public void setDateReservation(Date dateReservation) {
        this.dateReservation = dateReservation;
    }
    public void setStudentCode(String reservationCode) {
        ReservationCode = reservationCode;
    }

}
