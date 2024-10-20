import React, { useEffect, useRef } from "react";
import "./cursor.css";

const CustomCursor = () => {
	const cursorRef = useRef(null);

	useEffect(() => {
		const customCursor = cursorRef.current;

		const updateCursorPosition = (event) => {
			customCursor.style.top = `${event.clientY}px`;
			customCursor.style.left = `${event.clientX}px`;
		};

		const handleMouseMove = (event) => {
			updateCursorPosition(event);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return <div className='cursor' ref={cursorRef}></div>;
};

export default CustomCursor;
