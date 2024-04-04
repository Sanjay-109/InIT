import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';
import { Link } from 'react-router-dom'; 

function AdminQp() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [category, setCategory] = useState('');
    const [year, setYear] = useState('');
    const [domainName, setDomainName] = useState('');
    const [pdfData, setPdfData] = useState(null);

    useEffect(() => {
        // Fetch PDF data when component mounts
        const fetchPdfData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/view-qps`);
                setPdfData(response.data);
            } catch (error) {
                console.error('Error fetching PDF data:', error);
            }
        };
        fetchPdfData();
    }, []);

    // Function to handle viewing PDF file in a new tab
    const handleViewPdf = async (fileName) => {
        try {
            if (!fileName.endsWith('.pdf')) {
                fileName += '.pdf';
            }
            const response = await axios.get(`${API_BASE_URL}/download-pdf/${fileName}/qps`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); 
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    // Function to handle deleting a book
    const handleDeleteQp = async (fileName) => {
        try {
            if (!fileName.endsWith('.pdf')) {
                fileName += '.pdf';
            }
            await axios.delete(`${API_BASE_URL}/delete-qp/${fileName}`);
            // Refresh the PDF data to reflect changes
            alert('File deleted successfully');
            window.location.reload();
            const updatedPdfData = pdfData.filter(file => file.fileName !== fileName);
            setPdfData(updatedPdfData);
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile || !fileName) return;
        const formData = new FormData();
        let dn = domainName ;
        if ( !dn.endsWith('QP')){
            dn += 'QP';
        }
        formData.append('file', selectedFile);
        formData.append('fileName', fileName);
        formData.append('category', category);
        formData.append('year', year);
        try {
            await axios.post(`${API_BASE_URL}/upload-qpdf/${dn}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
            setPdfData(prevFiles => [...prevFiles, { fileName, category, year }]);
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

    const handleDomainChange = (event) => {
        setDomainName(event.target.value);
    };

    if (!pdfData) {
        return <div>Loading PDF...</div>;
    }

    return (
        <div>
            <header className="header">
                <h1>InIT</h1>
                    <nav className="nav">
                    <Link to="/admin" className="nav-link">Books</Link>
                    <Link to="/admincourses" className="nav-link">Courses</Link>
                    <Link to="/adminqps" className="nav-linkc">Question papers</Link>
                    </nav>
            </header>
            <div className='Admin-Page'>
            <div className='Books'>
                        <h2>Question Papers</h2>
                        <div className="book-grid">
                            {pdfData.map((file, index) => (
                            <div className="book-box" key={index}>
                                <div className="book-info">
                                    <h3>{file.fileName}</h3>
                                    <p className="author">{file.category}</p>
                                    <p className="edition">{file.year}</p>
                                </div>
                                <div className="button-container">
                                <button onClick={() => handleViewPdf(file.fileName)} className="view-button">View</button>
                                <button onClick={() => handleDeleteQp(file.fileName)} className="delete-button">Delete</button>
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
                                <input type="text" placeholder="End Sem / Assessment" name='category' value={category} onChange={handleCategoryChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Year</label>
                                <input type="text" placeholder="Enter Year" name='year' value={year} onChange={handleYearChange} />
                            </div>
                            <div className="input-group">
                                <label>Enter Domain Name</label>
                                <input type="text" placeholder="Enter domain name" name='domainName' value={domainName} onChange={handleDomainChange} />
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

export default AdminQp;
