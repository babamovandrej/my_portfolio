import React from 'react';
import PropTypes from 'prop-types';
import './skill-widget.css';

const SkillWidget = ({ text }) => {
    return (
        <div className="skill-widget">
            <p>{text}</p>
        </div>
    );
};

SkillWidget.propTypes = {
    text: PropTypes.string.isRequired
};

export default SkillWidget;