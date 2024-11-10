import React from 'react';
import './Services.css';

const services = [
  { id: 1, icon: '📄', title: 'GST', url: '' },
  { id: 2, icon: '™️', title: 'INCOME TAX', url: '' },
  { id: 3, icon: '📄', title: 'FSSAI', url: '' },
  { id: 5, icon: '📑', title: 'ACCOUNTING', url: '' },
  { id: 7, icon: '🍽️', title: 'TRADEMARK', url: '' },
  { id: 8, icon: '🏢', title: 'IEC', url: '' },
  { id: 9, icon: '📝', title: 'MSME', url: '' },
  { id: 9, icon: '📝', title: 'LICENCE', url: '' },
  { id: 6, icon: '🚚', title: 'E-WAY BILLS', url: '' },
  { id: 10, icon: '💸', title: 'MONEY TRANSFER', url: '' },
  { id: 10, icon: '💸', title: 'AUDIT', url: '' }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <a 
            key={service.id} 
            href={service.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <p className="service-title">{service.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
