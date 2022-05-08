package com.korki.korkibackend.service;

import com.korki.korkibackend.exceptions.StudentNotFound;
import com.korki.korkibackend.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.korki.korkibackend.repository.StudentRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public void addStudent(Student student) {
        student.setStudentCode(UUID.randomUUID().toString());
        studentRepository.save(student);
    }

    public List<Student> findAllStudents() {

        return studentRepository.findAll();
    }

    public Student updateStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student findStudentById(Long id) throws Throwable {
        return studentRepository.findStudentById(id).orElseThrow(() -> new StudentNotFound("not"));
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteStudentById(id);
    }
}
