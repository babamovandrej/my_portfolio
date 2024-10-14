import React, { useEffect, useRef } from "react";
import "./contact.css"

function Contact() {
    const contactRef = useRef(null);

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

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
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
        <div className='contact-container' ref={contactRef}>
            <p>
                Let's build something cool together!
            </p>
            <p>
                <span className='new-line'>
                    andrejbabamov@gmail.com
                </span>
            </p>
        </div>
    )
}

export default Contact