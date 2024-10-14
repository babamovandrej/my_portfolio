import { useEffect, useRef } from "react";

const useSmoothScroll = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const handleWheel = (event) => {
			event.preventDefault();
			const container = containerRef.current;
			if (!container) return;

			const sectionHeight = window.innerHeight;
			const currentScroll = container.scrollTop;
			const newScroll = event.deltaY > 0 ? currentScroll + sectionHeight : currentScroll - sectionHeight;

			container.scrollTo({
				top: newScroll,
				behavior: "smooth"
			});
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("wheel", handleWheel);
		}

		return () => {
			if (container) {
				container.removeEventListener("wheel", handleWheel);
			}
		};
	}, []);

	return containerRef;
};

export default useSmoothScroll;
