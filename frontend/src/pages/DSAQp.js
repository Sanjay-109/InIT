import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import API_BASE_URL from '../config';

function DSAQp() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [category, setCategory] = useState('');
    const [year, setYear] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);

    useEffect(() => {
        const fetchQpNames = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/fetch-qps/DSAQP`);
                setUploadedFiles(response.data);
            } catch (error) {
                console.error('Error fetching book names:', error);
            }
        };
        fetchQpNames();
    }, []);

    const handleDownload = async (filename, domain) => { 
        try {
            if (!filename.endsWith('.pdf')) {
                filename += '.pdf';
            }
            const response = await axios.get(`${API_BASE_URL}/download-pdf/${filename}/${domain}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); 
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile || !fileName) return;
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('fileName', fileName);
        formData.append('category', category);
        formData.append('year', year);
        try {
            await axios.post(`${API_BASE_URL}/upload-qpdf/DSAQP`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
            setUploadedFiles(prevFiles => [...prevFiles, { fileName, category, year }]);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file');
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileNameChange = (event) => {
        setFileName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <div>
            <header className="header">
                <div className='title'>
                    <h1>InIT</h1>
                </div>
                <div className='dash'>
                    <h1>Data Structures and Algorithms</h1>
                    <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link> 
                    <Link to="/dsa" className="nav-link">Books</Link>
                    <Link to="/dsacourse" className="nav-link">Courses</Link>
                    <Link to="/dsaqp" className="nav-linkc">Question papers</Link>
                    </nav>
                </div>
            </header>

            <div className="dsa-page">
                <div className='Books'>
                    <h2>Question Papers</h2>
                    <div className="book-grid">
                        {uploadedFiles.map((file, index) => (
                        <div className="book-box" key={index}>
                            <div className="book-info">
                                <h3>{file.fileName}</h3>
                                <p className="author">{file.category}</p>
                                <p className="edition">{file.year}</p>
                            </div>
                            <div className="button-container">
                                <button onClick={() => handleDownload(file.fileName, 'qps')} className="download-button">Download</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <div className='upload-box'>
                    <h2>Upload Question Papers</h2>
                    <div className='book-upload'>
                        <div className='upload-book'>
                            <div className="input-group">
                                <label>Enter File Name</label>
                                <input type="text" placeholder="Enter file name" name='fileName' value={fileName} onChange={handleFileNameChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Category</label>
                                <input type="text" placeholder="End Sem/Assessment" name='category' value={category} onChange={handleCategoryChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Year</label>
                                <input type="text" placeholder="Enter year" name='year' value={year} onChange={handleYearChange} />
                            </div>
                            <div className="input-group">
                                <label>Choose File</label>
                                <input type="file" name='file' onChange={handleFileChange} />
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

export default DSAQp;
