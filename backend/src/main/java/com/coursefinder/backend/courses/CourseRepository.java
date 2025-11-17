package com.coursefinder.backend.courses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

    @Query(
            "
            select distinct c.country 
            from Course c
            "
            ) 
    List<String> findDistinctCountries();

    @Query("
            select distinct c.targetInstitution 
            from Course c
            ")
    List<String> findDistinctTargetInstitutions();

    @Query("SELECT DISTINCT c.targetInstitution FROM Course c WHERE c.country = :country")
    List<String> findUniversitiesByCountrySelected(@Param("country") String country);

    @Query("SELECT DISTINCT c.majorCode FROM Course c WHERE c.country = :country AND c.targetInstitution = :university")
    List<String> findDistinctMajorCodes(
            @Param("country") String country,
            @Param("university") String university
    );
}
