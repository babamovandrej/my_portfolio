import { useEffect, useRef } from "react";

const useTextAnimation = () => {
	const ref = useRef(null);

	useEffect(() => {
		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
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

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
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

	return ref;
};

export default useTextAnimation;
