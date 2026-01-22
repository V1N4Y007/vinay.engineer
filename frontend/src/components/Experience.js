import React, { useEffect, useRef } from 'react';

const Experience = ({ data }) => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" ref={experienceRef}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className="experience-grid">
          {data.items.map((item) => (
            <div key={item.id} className="experience-item">
              <div className="experience-header">
                <h3>{item.title}</h3>
                <span className="company">{item.company}</span>
                <span className="duration">{item.duration}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;