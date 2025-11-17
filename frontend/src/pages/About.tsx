import React from "react";
import "../style/About.css";

const About: React.FC = () => {
    return (
        <div className="about">
            <h2>About Exchange Program Finder</h2>
            <p>
                The <strong>Exchange Program Finder</strong> is a platform that helps
                engineering and computer science students explore and compare equivalent courses
                available through international partner universities.
            </p>


            <p>
                Instead of searching manually comparing course outlines, this website
                provides a simple interface to browse universities, explore available exchange destinations,
                and match courses by major. It centralizes all partner schools from Concordia’s official
                exchange agreements into one accessible platform.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li>Search and filter by partner university, country, or major.</li>
                <li>View official partner institutions approved for Gina Cody students.</li>
                <li>Find quick links to each university’s exchange program page.</li>
                <li>Plan your exchange semester more efficiently.</li>
            </ul>

            <h3>Purpose</h3>
            <p>
                This project aims to make international study opportunities more accessible and transparent
                for engineering and computer science students. It supports Concordia’s mission to promote
                global learning experiences and academic mobility.
            </p>

            <h3>Developer</h3>
            <p>
                Created by <strong>Levon Kadehjian</strong>, a Software Engineering student at Concordia
                University, as part of a personal initiative to simplify the exchange course selection
                process for fellow students.
            </p>

            <p className="contact">
                <span>For feedback or suggestions:  </span>
                <a href="mailto:levon.kade@gmail.com" className="email">
                    levon.kade@gmail.com
                </a>
                <br />
                <a
                    href="https://www.linkedin.com/in/levon-kadehjian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                >
                    Connect on LinkedIn
                </a>
            </p>

        </div>
    );
};

export default About;
