import React, { useEffect, useRef } from "react";
import "./about.css";

function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                const paragraphs = entry.target.querySelectorAll(".about-container p");
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
        if (paragraphs[0]) {
            paragraphs[0].classList.add("animateStripfromLeft");
        }
        if (paragraphs[1]) {
            paragraphs[1].classList.add("animateStripfromRight");
        }
    };

    const removeAnimationClasses = (paragraphs) => {
        if (paragraphs[0]) {
            paragraphs[0].classList.remove("animateStripfromLeft");
        }
        if (paragraphs[1]) {
            paragraphs[1].classList.remove("animateStripfromRight");
        }
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