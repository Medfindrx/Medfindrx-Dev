// components/PharmacyCardsRow.tsx
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaCube, FaPhone } from "react-icons/fa";
import styles from "./PharmacyCardsRow.module.css"; // or use global CSS if preferred

const features = [
  {
    icon: <FaSearch />,
    title: "Real Time Medicine Search",
    description: "Patients can instantly find out if medicine is available in nearby.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Nearby Pharmacy Discovery",
    description: "Discover all listed pharmacies on a map with their operational status.",
  },
  {
    icon: <FaCube />,
    title: "Stock Visibility",
    description: "Pharmacies can display stock levels reducing unnecessary calls.",
  },
  {
    icon: <FaPhone />,
    title: "Call/WhatsApp Integration",
    description: "Patients can conveniently find out if medicine is available in nearby.",
  },
];

const PharmacyCardsRow = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
            <button className={styles.button}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PharmacyCardsRow;
