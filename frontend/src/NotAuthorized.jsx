import React from 'react';

const NotAuthorized = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>You are not Authorized to visit this page</h2>
            <p>Please log in first.</p>
            <p><a href="/login">Back to Login page</a></p>
        </div>
    );
};

export default NotAuthorized;
