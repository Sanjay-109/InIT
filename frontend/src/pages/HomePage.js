import React from 'react';
// import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <div>
            <header className="header">
                <h1 className='homehead'>InIT</h1>
                {/* <nav className="nav">
                    <Link to="/materials" className="nav-linkc">Materials</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/qps" className="nav-link">Question papers</Link>
                </nav> */}
            </header>

            <div className="course-list">
            <a href="/os" className="course-box">
                <img src={require("../components/OS.jpg")} alt="Operating Systems" />
                <h2>Operating Systems</h2>
            </a>
            <a href='/dsa' className="course-box">
                <img src={require("../components/DSA.png")} alt="Data-Structures_and_Algorithms" />
                <h2>Data Structures and Algorithms</h2>
            </a>
            <a href='/dbms' className="course-box">
                <img src={require("../components/DBMS.png")} alt="Database Management Systems" />
                <h2>Database Management Systems</h2>
            </a>
            <a href='/cn' className="course-box">
                <img src={require("../components/CN.jpg")} alt="Computer Networks" />
                <h2>Computer Networks</h2>
            </a>
            <a href='/ca' className="course-box">
                <img src={require("../components/CA.png")} alt="Computer Architecture" />
                <h2>Computer Architecture</h2>
            </a>
            </div>
            <footer className='footer'>
                <p>&copy; 2024 InIT. All rights reserved. | <a href="mailto:init12841@gmail.com">Contact Us</a></p>
            </footer>
        </div>
    );
}

export default HomePage;
