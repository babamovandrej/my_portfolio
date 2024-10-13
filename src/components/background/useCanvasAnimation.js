import { useEffect, useRef, useCallback } from 'react';

const useCanvasAnimation = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);

    const createParticles = useCallback((canvas, ctx) => {
        const arc = 100;
        const parts = [];
        const colors = ['#ECEDEE'];
        const maxSize = Math.min(canvas.width, canvas.height) * 0.005;

        for (let i = 0; i < arc; i++) {
            parts[i] = {
                x: Math.ceil(Math.random() * canvas.width),
                y: Math.ceil(Math.random() * canvas.height),
                toX: Math.random() * 5 - 1,
                toY: Math.random() * 2 - 1,
                c: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * maxSize,
            };
        }
        return parts;
    }, []);

    const animateParticles = useCallback((canvas, ctx, parts) => {
        let time = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < parts.length; i++) {
                const li = parts[i];
                const size = li.size;
                const colorWithOpacity = `rgba(${parseInt(li.c.slice(1, 3), 16)}, ${parseInt(li.c.slice(3, 5), 16)}, ${parseInt(li.c.slice(5, 7), 16)}, 0.5)`;

                ctx.fillStyle = colorWithOpacity;
                ctx.strokeStyle = colorWithOpacity;

                ctx.beginPath();
                ctx.rect(li.x - size / 2, li.y - size / 2, size, size);
                if (i % 2 === 0) ctx.stroke();
                else ctx.fill();

                li.x = li.x + li.toX * (time * 0.05);
                li.y = li.y + li.toY * (time * 0.05);

                if (li.x > canvas.width) li.x = 0;
                if (li.y > canvas.height) li.y = 0;
                if (li.x < 0) li.x = canvas.width;
                if (li.y < 0) li.y = canvas.height;
            }
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
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const parts = createParticles(canvas, ctx);
        animateParticles(canvas, ctx, parts);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [createParticles, animateParticles]);

    return canvasRef;
};

export default useCanvasAnimation;