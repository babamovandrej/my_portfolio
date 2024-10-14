import React from "react";
import PropTypes from "prop-types";
import "./skill-widget.css";

const SkillWidget = ({ skill, color, textColor }) => {
    return (
        <div className="widget-container" style={{ backgroundColor: color }}>
           <p style={{ color: textColor }}>{skill}</p>
        </div>
    );
};

SkillWidget.propTypes = {
    skill: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string
};

SkillWidget.defaultProps = {
    textColor: "#000000" 
};

export default SkillWidget;