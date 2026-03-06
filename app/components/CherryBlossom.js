"use client";

import React, { useEffect, useRef } from 'react';

export default function CherryBlossom() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let particles = [];
        let trailParticles = [];
        let mouse = { x: -1000, y: -1000 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            for (let i = 0; i < 1; i++) {
                trailParticles.push(new TrailParticle(mouse.x, mouse.y));
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor() { this.init(); }
            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height - canvas.height;
                this.size = Math.random() * 4 + 2;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 1 + 1;
                this.color = `rgba(255, ${180 + Math.random() * 75}, ${180 + Math.random() * 75}, ${0.6 + Math.random() * 0.4})`;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotationSpeed;
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    this.x += (dx / distance) * force * 2;
                    this.y += (dy / distance) * force * 2;
                }
                if (this.y > canvas.height) { this.y = -10; this.x = Math.random() * canvas.width; }
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        class TrailParticle {
            constructor(x, y) {
                this.x = x; this.y = y;
                this.size = Math.random() * 3 + 2;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `rgba(255, 50, 50, ${0.6 + Math.random() * 0.4})`;
                this.life = 1.0;
                this.decay = 0.03 + Math.random() * 0.03;
            }
            update() { this.x += this.speedX; this.y += this.speedY; this.life -= this.decay; }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const initParticles = () => {
            for (let i = 0; i < 40; i++) particles.push(new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => { p.update(); p.draw(); });
            for (let i = 0; i < trailParticles.length; i++) {
                trailParticles[i].update();
                trailParticles[i].draw();
                if (trailParticles[i].life <= 0) { trailParticles.splice(i, 1); i--; }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
        />
    );
}
