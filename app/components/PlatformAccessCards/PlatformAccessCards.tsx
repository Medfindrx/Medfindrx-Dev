'use client';

import styles from './PlatformAccessCards.module.css';
import Image from 'next/image';
import React from 'react';

const PlatformAccessCards = () => {
  const cards = [
    {
      title: 'Patient',
      description: 'Easily order prescriptions and access health services on one platform.',
      image: '/images/patient.png', // ✅ Replace with correct path
    },
    {
      title: 'Pharmacy',
      description: 'Manage orders, inventory, and connect with patients seamlessly.',
      image: '/images/pharmacy.png', // ✅ Replace with correct path
    },
    {
      title: 'Doctor',
      description: 'Prescribe digitally and monitor patient health in real-time.',
      image: '/images/doctor.png', // ✅ Replace with correct path
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Who Can Access Our Platform?</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <Image src={card.image} alt={card.title} width={80} height={80} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformAccessCards;

