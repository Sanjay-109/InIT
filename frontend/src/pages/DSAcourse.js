import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import API_BASE_URL from '../config';
import axios from 'axios';

function DSAcourse() {
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/fetch-courses/DSAC`);
                setCourseData(response.data);
            } catch (error) {
                console.error('Error fetching Course data:', error);
            }
        };
        fetchCourseData();
    }, []);

    if (!courseData) {
        return <div>Loading PDF...</div>;
    }

    return (
        <div>
            <header className="header">
                <div className='title'>
                    <h1>InIT</h1>
                </div>
                <div className='dash'>
                    <h1>Data Structures and Algorithms</h1>
                    <nav className="nav">
                    <Link to="/home" className="nav-link">Home</Link> 
                    <Link to="/dsa" className="nav-link">Books</Link>
                    <Link to="/dsacourse" className="nav-linkc">Courses</Link>
                    <Link to="/dsaqp" className="nav-link">Question papers</Link>
                    </nav>
                </div>
            </header>

            <div className="certification-page">
                <h1>Courses</h1>
                {courseData.map((file, index) => (
                    <div key={index} className="certification-box">
                        
                        <div className="linkers">
                            <h2>{file.subject}</h2>
                            <a href={file.link} target="_blank" rel="noopener noreferrer" className="linker-button">Go to Course</a>
                            <div className="details">
                                <h5>{file.rating}</h5>
                                <h5>{file.cost}</h5>
                                <h5>{file.enroll}</h5>
                            </div>
                            <p>{file.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <footer className='footer'>
                <p>&copy; 2024 InIT. All rights reserved. | <a href="mailto:init12841@gmail.com">Contact Us</a></p>
            </footer>
        </div>
    )
}

export default DSAcourse;