import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Universities from "./pages/Universities";
import About from "./pages/About";
import Courses from "./pages/Courses";
import {Footer} from "./components/Footer.tsx";
import "./App.css"
const App: React.FC = () => {
    return (
        <div className="App">

        <Router>
            <Header />
            <main style={{ padding: "2rem" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/universities" element={<Universities />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer/>
        </Router>
        </div>
    );
};

export default App;
