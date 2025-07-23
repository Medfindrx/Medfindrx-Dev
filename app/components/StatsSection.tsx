'use client';

import styles from './StatsSection.module.css';
import { FaTruck, FaClock, FaShoppingCart, FaPhone } from 'react-icons/fa';

export default function StatsSection() {
  const stats = [
    {
      icon: <FaTruck size={32} />,
      value: '80%',
      label: 'Faster Insights. Better Health.',
    },
    {
      icon: <FaClock size={32} />,
      value: '2X',
      label: 'Turn First-Timers Into Lifetimes.',
    },
    {
      icon: <FaShoppingCart size={32} />,
      value: '50%',
      label: 'Faster Clicks & Quicker Orders.',
    },
    {
      icon: <FaPhone size={32} />,
      value: '95%',
      label: 'Phone Orders, Done in Seconds.',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.cardsContainer}>
        {stats.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.value}>{item.value}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.infoSection}>
        <h2 className={styles.heading}>Remaining Pharmacy Access and Management</h2>
        <p className={styles.description}>
          We bridge the gap between patient and pharmacies with powerful, integrated digital ecosystem designed for system designed for speed, efficiency and better outcomes.
        </p>
        <button className={styles.button}>Explore Now</button>
      </div>
    </section>
  );
}

