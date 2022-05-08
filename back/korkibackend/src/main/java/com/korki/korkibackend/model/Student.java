package com.korki.korkibackend.model;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    private String name;
    private String login;
    private String password;

    private String role;

    public String getPassword() {
        return password;
    }

    @CreationTimestamp
     private Date creationDateTime;

    public Student(Long id, String name, String login, String password, String role, Date creationDateTime, String studentCode) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
        this.role = role;
        this.creationDateTime = creationDateTime;
        StudentCode = studentCode;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Date getCreationDateTime() {
        return creationDateTime;
    }

    public void setCreationDateTime(Date creationDateTime) {
        this.creationDateTime = creationDateTime;
    }

    public Student(Long id, String name, String password, String role, Date creationDateTime, String studentCode) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
        this.creationDateTime = creationDateTime;
        StudentCode = studentCode;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    // private St dateOfMeeting;

    public String getStudentCode() {
        return StudentCode;
    }

    public void setStudentCode(String studentCode) {
        StudentCode = studentCode;
    }

    private String StudentCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // public Date getDateOfMeeting() {
    //      return dateOfMeeting;
    //  }

    // public void setDateOfMeeting(Date dateOfMeeting) {
    //    this.dateOfMeeting = dateOfMeeting;
    // }

    public Student(Long id, String name, String studentCode,String role,String password) {
        this.id = id;
        this.name = name;
        ///this.dateOfMeeting = dateOfMeeting;
        this.role=role;
        this.password=password;
        StudentCode = studentCode;
    }

    public Student(Long id) {
        this.id = id;
    }

    public Student(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Student() {
    }
}
