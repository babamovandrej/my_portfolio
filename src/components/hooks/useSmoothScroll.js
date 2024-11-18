import { useEffect, useRef, useCallback } from "react";

const useSmoothScroll = () => {
    const containerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    const handleWheel = useCallback((event) => {
        event.preventDefault();
        const container = containerRef.current;
        if (!container) return;

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
            const sectionHeight = window.innerHeight;
            const currentScroll = container.scrollTop;
            const newScroll = event.deltaY > 50
                ? currentScroll + sectionHeight
                : event.deltaY < -50
                    ? currentScroll - sectionHeight
                    : currentScroll;

            container.scrollTo({
                top: newScroll,
                behavior: "smooth"
            });
        }, 100);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleWheel]);

    return containerRef;
};

export default useSmoothScroll;