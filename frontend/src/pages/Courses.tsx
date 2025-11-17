import React, {useState, useEffect} from "react";
import axios from "axios";
import "../style/Courses.css";

const BASE_URL = "http://localhost:8080/courses";

const Courses: React.FC = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const [universities, setUniversities] = useState<string[]>([]);
    const [majors, setMajors] = useState<string[]>([]);


    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedUniversity, setSelectedUniversity] = useState("");
    const [selectedMajor, setSelectedMajor] = useState("");


    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/countries`)
            .then((res) => setCountries(res.data))
            .catch((err) => console.error("Error fetching countries:", err));
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            axios
                .get(`${BASE_URL}/universities`, {params: {country: selectedCountry},})
                .then((res) => setUniversities(res.data))
                .catch((err) => console.error("Error fetching universities:", err));
        } else {
            setUniversities([]);
        }

        setSelectedUniversity("");
        setSelectedMajor("");
        setCourses([]);
        setSearched(false);
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCountry && selectedUniversity) {
            axios
                .get(`${BASE_URL}/majors`, {params: {country: selectedCountry, university: selectedUniversity},})
                .then((res) => setMajors(res.data))
                .catch((err) => console.error("Error fetching majors:", err));
        } else {
            setMajors([]);
        }
        setSelectedMajor("");
    }, [selectedCountry, selectedUniversity]);

    // Search for courses by university + optional major
    const handleSearch = async () => {
        if (!selectedUniversity) {
            alert("Please select a university.");
            return;
        }

        setLoading(true);
        setSearched(true);

        try {
            const res = await axios.get(`${BASE_URL}`, {
                params: {
                    university: selectedUniversity,
                    majorCode: selectedMajor || undefined,
                },
            });
            setCourses(res.data);
        } catch (err) {
            console.error("Error fetching courses:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Courses">
            <h2>Find Equivalent Courses</h2>

            {/* Country Selector */}
            <div className="selector">
                <label>Select Country</label>
                <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                >
                    <option value="">-- Choose a Country --</option>
                    {countries.map((country, idx) => (
                        <option key={idx} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>

            {/* University Selector */}
            {universities.length > 0 && (
                <div className="selector">
                    <label>Select University</label>
                    <select
                        value={selectedUniversity}
                        onChange={(e) => setSelectedUniversity(e.target.value)}
                    >
                        <option value="">-- Choose a University --</option>
                        {universities.map((uni, idx) => (
                            <option key={idx} value={uni}>
                                {uni}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Major Selector */}
            {majors.length > 0 && (
                <div className="selector">
                    <label>Select Major Code (optional)</label>
                    <select
                        value={selectedMajor}
                        onChange={(e) => setSelectedMajor(e.target.value)}
                    >
                        <option value="">-- All Majors --</option>
                        {majors.map((major, idx) => (
                            <option key={idx} value={major}>
                                {major}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Search Button */}
            <button
                onClick={handleSearch}
                disabled={!selectedUniversity || loading}
                className="search-btn"
            >
                {loading ? "Searching..." : "Search Courses"}
            </button>

            {/* Results */}
            <div className="results">
                <h3>Courses</h3>
                {loading && <p>Loading...</p>}
                {!loading && searched && courses.length === 0 && (
                    <p>No courses found for this selection.</p>
                )}
                {!loading && courses.length > 0 && (
                    <>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course</th>
                                <th>Concordia Title</th>
                                <th>Target Course Code</th>
                                <th>Target Title</th>
                                <th>University</th>
                            </tr>
                        </thead>
                        <tbody>
                        {courses.map((course, i) => (
                            <tr key={i}>
                                <td>{course.majorCode}</td>
                                <td>{course.courseCode}</td>
                                <td>{course.homeTitle}</td>
                                <td>{course.targetCourseCode}</td>
                                <td>{course.targetTitle}</td>
                                <td>{course.targetInstitution}</td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                        <p style={{ textAlign: "center", marginTop: "1rem", color: "#555" }}>
                            More classes will be added soon...
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Courses;
