import React, { useEffect, useRef } from "react";
import "./about.css";

function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                const paragraphs = entry.target.querySelectorAll("p");
                if (entry.isIntersecting) {
                    addAnimationClasses(paragraphs);
                } else {
                    removeAnimationClasses(paragraphs);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    const addAnimationClasses = (paragraphs) => {
        paragraphs.forEach((paragraph, index) => {
            paragraph.classList.add(index === 0 ? "animateStripfromLeft" : "animateStripfromRight");
        });
    };

    const removeAnimationClasses = (paragraphs) => {
        paragraphs.forEach((paragraph, index) => {
            paragraph.classList.remove(index === 0 ? "animateStripfromLeft" : "animateStripfromRight");
        });
    };

    return (
        <div className='about-container' ref={aboutRef}>
            <p>
                Hello! I'm <span className='highlight'>Andrej Babamov</span>, a Full Stack Developer
            </p>
            <p>
                <span className='new-line'>
                    currently based in <span className='highlight'>Skopje, Macedonia</span>.
                </span>
            </p>
        </div>
    );
}

export default About;