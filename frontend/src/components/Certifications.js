import React, { useEffect, useRef } from 'react';

const Certifications = ({ data }) => {
  const certRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (certRef.current) {
      observer.observe(certRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="certifications" ref={certRef}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className="cert-grid">
          {data.items.map((cert, index) => (
            <div key={index} className="cert-item">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;