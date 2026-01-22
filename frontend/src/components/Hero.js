import React, { useEffect, useRef } from 'react';

const Hero = ({ data }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <h1 className="hero-name">{data.name}</h1>
        <p className="hero-role">{data.role}</p>
        <p className="hero-subtitle">{data.subtitle}</p>
        <div className="hero-cta">
          <a href="#about" className="cta-primary">About</a>
          <a href="#contact" className="cta-secondary">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;