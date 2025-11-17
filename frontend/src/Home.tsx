import React from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="hero">
                <h1>Exchange Program Finder</h1>
                <p>
                    Discover global opportunities for engineering and computer science studies.
                    Easily explore partner universities, compare courses, and plan your academic exchange.
                </p>
                <div className="buttons">
                    <Link to="/universities" className="btn">
                        Explore Universities
                    </Link>
                    <Link to="/courses" className="btn secondary">
                        Find Courses
                    </Link>
                    <Link to="/about" className="btn">
                        Learn More
                    </Link>
                </div>
            </div>

            <div className="how-it-works">
                <h2>How It Works</h2>
                <ol>
                    <li>Select a <strong>country</strong> to see its partner universities.</li>
                    <li>Pick a <strong>university</strong> to explore course equivalencies.</li>
                    <li>Optionally choose a <strong>major code</strong> to refine your search.</li>
                    <li>Review the list of <strong>matching courses</strong> between your program and the partner school.</li>
                    <li>Use these results to plan and compare your exchange semester more effectively.</li>
                </ol>

            </div>
        </div>
    );
};

export default Home;
