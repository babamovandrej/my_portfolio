import React from 'react';
import "./loading.css";

function Loading({ progress }) {
    return (
        <div className="loading-container">
            <div className="progress">{progress}</div>
        </div>
    );
}

export default Loading;