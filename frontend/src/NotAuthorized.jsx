import React from 'react';
import './App.css'; // Import your CSS file for styling

const NotAuthorized = () => {
    return (
        <div className="not-authorized-container">
            <h2 className="not-authorized-title">You are not Authorized to visit this page</h2>
            <p className="not-authorized-message">Please log in first.</p>
            <p className="not-authorized-link"><a href="/">Back to Login page</a></p>
        </div>
    );
};

export default NotAuthorized;
