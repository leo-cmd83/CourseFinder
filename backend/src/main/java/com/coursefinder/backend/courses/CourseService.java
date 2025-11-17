package com.coursefinder.backend.courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<String> getCountries() {
        return courseRepository.findDistinctCountries()
                .stream()
                .sorted().toList();
    }

    public List<String> getUniversities() {
        return courseRepository.findDistinctTargetInstitutions();
    }

    public List<String> getUniversitiesByCountry(String country){
        return courseRepository.findUniversitiesByCountrySelected(country);
    }

    public List<String> getMajorCodesByCountryAndUniversity(String country, String university) {
        return courseRepository.findDistinctMajorCodes(country, university);
    }


    public List<Course> getCoursesByUni(String university) {
        return courseRepository.findAll().stream()
                .filter(course -> course.getTargetInstitution().equals(university))
                .collect(Collectors.toList());
    }

    public List<Course> getCoursesByUniAndMajor(String university, String majorCode) {
        return courseRepository.findAll().stream()
                .filter(course ->
                        course.getTargetInstitution().equalsIgnoreCase(university) &&
                                course.getMajorCode().equalsIgnoreCase(majorCode))
                .collect(Collectors.toList());
    }


}
