"use client"
import { useRef, useEffect } from "react";

export default function Canvas() {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number>(0);
    const gridCanvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        debugger
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Offscreen canvas for grid
        const gridCanvas = document.createElement('canvas');
        const gridCtx = gridCanvas.getContext('2d');
        if (!gridCtx) return;
        gridCanvasRef.current = gridCanvas;

        // Grid properties
        const gridSize = 80;
        const points: { x: number; y: number; vx: number; vy: number }[] = [];
        const numPoints = 50;
        // Set canvas size
        //const setCanvasSize = () => {
        //    canvas.width = window.innerWidth;
        //    canvas.height = window.innerHeight;
        //};
        // Set size and draw grid
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gridCanvas.width = window.innerWidth;
            gridCanvas.height = window.innerHeight;
            drawGrid();
        };

        const drawGrid = () => {
            if (!gridCtx) return;
            gridCtx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
            gridCtx.strokeStyle = 'rgba(45, 212, 191, 0.1)';
            gridCtx.lineWidth = 1;

            for (let x = 0; x < gridCanvas.width; x += gridSize) {
                gridCtx.beginPath();
                gridCtx.moveTo(x, 0);
                gridCtx.lineTo(x, gridCanvas.height);
                gridCtx.stroke();
            }

            for (let y = 0; y < gridCanvas.height; y += gridSize) {
                gridCtx.beginPath();
                gridCtx.moveTo(0, y);
                gridCtx.lineTo(gridCanvas.width, y);
                gridCtx.stroke();
            }
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Initialize points
        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        // Animation
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(gridCanvas, 0, 0);
            // Update points
            if (window.innerWidth > 768) {
                points.forEach(point => {
                    point.x += point.vx;
                    point.y += point.vy;

                    // Bounce off walls
                    if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
                    if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
                });


                // Draw connecting lines
                points.forEach((point, i) => {
                    points.slice(i + 1).forEach(otherPoint => {
                        const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.moveTo(point.x, point.y);
                            ctx.lineTo(otherPoint.x, otherPoint.y);
                            ctx.strokeStyle = `rgba(45, 212, 191, ${0.2 * (1 - distance / 150)})`;
                            ctx.stroke();
                        }
                    });
                });

            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);
    return (
        //<motion.div
        //    initial={{ opacity: 0, y: 20 }}
        //    animate={{ opacity: 1, y: 0 }}
        //    transition={{ duration: 0.5 }}
        //>
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 container mx-auto h-screen"
        //style={{ background: 'linear-gradient(to bottom, #0F172A, #1E293B)' }}
        />

        //</motion.div>
    );
}
