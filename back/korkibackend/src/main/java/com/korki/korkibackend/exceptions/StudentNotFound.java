package com.korki.korkibackend.exceptions;

public class StudentNotFound extends RuntimeException {
    public StudentNotFound(String info) {
        super(info);

    }
}
