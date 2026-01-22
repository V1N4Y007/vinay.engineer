import React, { useEffect, useRef } from 'react';

const Contact = ({ data }) => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="contact-links">
          <a href={`mailto:${data.email}`} className="contact-link">Email</a>
          <a href={data.linkedin} className="contact-link">LinkedIn</a>
        </div>
        <p className="location">{data.location}</p>
      </div>
    </section>
  );
};

export default Contact;