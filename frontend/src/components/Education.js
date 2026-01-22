import React, { useEffect, useRef } from 'react';

const Education = ({ data }) => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="education" ref={educationRef}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className="education-grid">
          {data.items.map((item, index) => (
            <div key={index} className="education-item">
              <h3>{item.degree}</h3>
              {item.duration && <span className="duration">{item.duration}</span>}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;