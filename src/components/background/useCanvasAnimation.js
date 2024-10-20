import { useEffect, useRef, useCallback } from "react";

const useCanvasAnimation = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);

    const createParticles = useCallback((canvas, ctx) => {
        const particleCount = 100;
        const particles = [];
        const colors = ["#ECEDEE"];
        const maxSize = Math.min(canvas.width, canvas.height) * 0.005;

        for (let i = 0; i < particleCount; i++) {
            particles[i] = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                velocityX: Math.random() * 5 - 1,
                velocityY: Math.random() * 2 - 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * maxSize
            };
        }
        return particles;
    }, []);

    const animateParticles = useCallback((canvas, ctx, particles) => {
        let time = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                const { x, y, size, color, velocityX, velocityY } = particle;
                const colorWithOpacity = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.5)`;

                ctx.fillStyle = colorWithOpacity;
                ctx.strokeStyle = colorWithOpacity;

                ctx.beginPath();
                ctx.rect(x - size / 2, y - size / 2, size, size);
                Math.random() < 0.5 ? ctx.stroke() : ctx.fill();

                particle.x = (x + velocityX * (time * 0.05)) % canvas.width;
                particle.y = (y + velocityY * (time * 0.05)) % canvas.height;
            });
            if (time < 20) {
                time++;
            }
            animationFrameId.current = requestAnimationFrame(draw);
        };

        draw();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = createParticles(canvas, ctx);
        animateParticles(canvas, ctx, particles);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [createParticles, animateParticles]);

    return canvasRef;
};

export default useCanvasAnimation;