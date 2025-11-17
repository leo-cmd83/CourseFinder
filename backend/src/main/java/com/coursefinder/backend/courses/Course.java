package com.coursefinder.backend.courses;

import jakarta.persistence.*;

@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // if DB auto-increments
    private Integer id;
    @Column(name = "code_prefix")
    private String majorCode;
    private String courseCode;
    private String homeTitle;
    private String targetInstitution;
    private String targetCourseCode;
    private String targetTitle;
    private String country;

    public Course() {
    }

    public Course(Integer id, String majorCode, String courseCode, String homeTitle, String targetInstitution, String targetCourseCode, String targetTitle, String country) {
        this.id = id;
        this.majorCode = majorCode;
        this.courseCode = courseCode;
        this.homeTitle = homeTitle;
        this.targetInstitution = targetInstitution;
        this.targetCourseCode = targetCourseCode;
        this.targetTitle = targetTitle;
        this.country = country;
    }

    public Integer getId() {
        return id;
    }
    public String getMajorCode() {
        return majorCode;
    }
    public String getCourseCode() {
        return courseCode;
    }
    public String getHomeTitle() {
        return homeTitle;
    }
    public String getTargetInstitution() {
        return targetInstitution;
    }
    public String getTargetCourseCode() {
        return targetCourseCode;
    }
    public String getTargetTitle() {
        return targetTitle;
    }
    public String getCountry() {
        return country;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public void setMajorCode(String majorCode) {
        this.majorCode = majorCode;
    }
    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }
    public void setHomeTitle(String homeTitle) {
        this.homeTitle = homeTitle;
    }
    public void setTargetInstitution(String targetInstitution) {
        this.targetInstitution = targetInstitution;
    }
    public void setTargetCourseCode(String targetCourseCode) {
        this.targetCourseCode = targetCourseCode;
    }
    public void setTargetTitle(String targetTitle) {
        this.targetTitle = targetTitle;
    }
    public void setCountry(String country) {
        country = country;
    }
}
