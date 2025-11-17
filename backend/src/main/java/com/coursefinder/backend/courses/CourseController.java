package com.coursefinder.backend.courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("courses")
@CrossOrigin(origins = "http://localhost:5173")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/countries")
    public List<String> countries() {
        return courseService.getCountries();
    }

    @GetMapping("/universities")
    public List<String> universities(@RequestParam(required = false) String country) {
        if (country != null && !country.isEmpty()) {
            // http://localhost:8080/courses/universities?country=Canada
            return courseService.getUniversitiesByCountry(country);
        }
        // fallback for full list
        return courseService.getUniversities();
    }

    @GetMapping("/majors")
    public List<String> getMajorCodes(
            @RequestParam String country,
            @RequestParam String university) {
        return courseService.getMajorCodesByCountryAndUniversity(country, university);
    }



    @GetMapping
    public List<Course> getCourses(
            @RequestParam String university,
            @RequestParam(required = false) String majorCode) {

        if (majorCode == null)
            //http://localhost:8080/courses?university=McGill 
            return courseService.getCoursesByUni(university);

            //http://localhost:8080/courses?university=McGill & majorCode = COMP
        return courseService.getCoursesByUniAndMajor(university, majorCode);
    }


}
