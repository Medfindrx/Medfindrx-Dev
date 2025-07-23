'use client';
import React from 'react';
import styles from './HowItWorks.module.css';
import { LucideSearch, LucideUpload, LucidePhoneCall } from 'lucide-react';

const steps = [
  {
    title: 'Search Nearby',
    icon: <LucideSearch className={styles.icon} />,
    desc: 'Find available medicines near you in seconds.',
  },
  {
    title: 'Upload Prescription',
    icon: <LucideUpload className={styles.icon} />,
    desc: 'Upload your prescription and get verified availability.',
  },
  {
    title: 'Call or Chat',
    icon: <LucidePhoneCall className={styles.icon} />,
    desc: 'Directly connect with the pharmacy for updates.',
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How MedFindRx Works</h2>
        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconBox}>{step.icon}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

