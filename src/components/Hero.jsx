// Hero.jsx
import { useEffect, useRef } from "react";
import "./Hero.css";

export function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const shapes = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 15 + Math.random() * 30,
      color: `hsl(${Math.random() * 360}, 50%, 60%)`,
      speedX: (Math.random() - 0.5) * 0.7,
      speedY: (Math.random() - 0.5) * 0.7,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((s) => {
        s.x += s.speedX;
        s.y += s.speedY;
        if (s.x < 0 || s.x > canvas.width) s.speedX *= -1;
        if (s.y < 0 || s.y > canvas.height) s.speedY *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero-section"  id="home">
      <canvas ref={canvasRef} />
      <div className="hero-content">
        <h1>We Craft Digital Experiences</h1>
        <p>Turning creative ideas into smooth, interactive, and visually appealing web experiences.</p>
        <a href="#about" className="hero-cta">Learn More</a>
      </div>
    </section>
  );
};
