import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
import { Link } from 'react-router-dom'; 

function AdminCourses() {
    const [subject, setSubject] = useState('');
    const [link, setLink] = useState('');
    const [rating, setRating] = useState('');
    const [cost, setCost] = useState('');
    const [enroll, setEnroll] = useState('');
    const [description, setDescription] = useState('');
    const [domainName, setDomainName] = useState('');
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/view-courses`);
                setCourseData(response.data);
            } catch (error) {
                console.error('Error fetching Course data:', error);
            }
        };
        fetchCourseData();
    }, []);

    // const handleViewPdf = async (fileName) => {
    //     try {
    //         if (!fileName.endsWith('.pdf')) {
    //             fileName += '.pdf';
    //         }
    //         const response = await axios.get(`${API_BASE_URL}/download-pdf/${fileName}/qps`, {
    //             responseType: 'blob',
    //         });
    //         const url = window.URL.createObjectURL(new Blob([response.data]));
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.setAttribute('download', fileName); 
    //         document.body.appendChild(link);
    //         link.click();
    //     } catch (error) {
    //         console.error('Error downloading PDF:', error);
    //     }
    // };

    // Function to handle deleting a book
    const handleDeleteCourse = async (link) => {
        try {
            const encodedLink = encodeURIComponent(link);
            await axios.delete(`${API_BASE_URL}/delete-course/${encodedLink}`);
            // Refresh the PDF data to reflect changes
            alert('File deleted successfully');
            window.location.reload();
            const updatedCourseData = courseData.filter(file => file.link !== link);
            setCourseData(updatedCourseData);
        } catch (error) {
            console.error('Error deleting course:', error);
        }   
    };

    const handleUpload = async () => {
        let dn = domainName ;
        if ( !dn.endsWith('C')){
            dn += 'C';
        }
        const requestData = {
            subject: subject,
            link: link,
            rating: rating,
            cost: cost,
            enroll: enroll,
            description: description
        };
        try {
            await axios.post(`${API_BASE_URL}/upload-course/${dn}`, requestData);
            alert('File uploaded successfully');
            setCourseData(prevFiles => [...prevFiles, { subject, link, rating, cost, enroll, description }]);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file');
        }
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleCostChange = (event) => {
        setCost(event.target.value);
    };

    const handleEnrollChange = (event) => {
        setEnroll(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDomainChange = (event) => {
        setDomainName(event.target.value);
    };

    if (!courseData) {
        return <div>Loading Courses...</div>;
    }

    return (
        <div>
            <header className="header">
                <h1>InIT</h1>
                    <nav className="nav">
                    <Link to="/admin" className="nav-link">Books</Link>
                    <Link to="/admincourses" className="nav-linkc">Courses</Link>
                    <Link to="/adminqps" className="nav-link">Question papers</Link>
                    </nav>
            </header>
            <div className='Admin-Page'>
            <div className='Books'>
                        <h2>Courses</h2>
                        <div className="book-grid">
                            {courseData.map((file, index) => (
                            <div className="book-box" key={index}>
                                <div className="linkers">
                                    <h2>{file.subject}</h2>
                                    {/* <a href={file.link} target="_blank" rel="noopener noreferrer" className="linker-button">Go to Course</a> */}
                                    <div className="details">
                                        <h5>{file.rating}</h5>
                                        <h5>{file.cost}</h5>
                                        <h5>{file.enroll}</h5>
                                    </div>
                                    {/* <p>{file.description}</p> */}
                                </div>
                                <div className="button-container">
                                    <a href={file.link} target="_blank" rel="noopener noreferrer" className="view-button">View</a>
                                    <button onClick={() => handleDeleteCourse(file.link)} className="delete-button">Delete</button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                <br></br>
                <div className='upload-box'>
                    <h2>Upload Courses</h2>
                    <div className='book-upload'>
                        <div className='upload-book'>
                            <div className="input-group">
                                <label>Enter Subject</label>
                                <input type="text" placeholder="Enter Subject" name='subject' value={subject} onChange={handleSubjectChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Course Link</label>
                                <input type="text" placeholder="Enter Course link" name='link' value={link} onChange={handleLinkChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Course Rating</label>
                                <input type="text" placeholder="Enter Course rating" name='rating' value={rating} onChange={handleRatingChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Course Cost</label>
                                <input type="text" placeholder="Enter Course cost" name='cost' value={cost} onChange={handleCostChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Course Enrollments</label>
                                <input type="text" placeholder="Enter Course enrollments" name='enroll' value={enroll} onChange={handleEnrollChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Course Description</label>
                                <textarea placeholder="Enter Course description" name='description' value={description} onChange={handleDescriptionChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Domain Name</label>
                                <input type="text" placeholder="Enter domain name" name='domainName' value={domainName} onChange={handleDomainChange} />
                            </div>
                            <button onClick={handleUpload} className='upload-button'>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <p>&copy; 2024 InIT. All rights reserved. | <a href="mailto:init12841@gmail.com">Contact Us</a></p>
            </footer>
        </div>
        
    );
}

export default AdminCourses;
