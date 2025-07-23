import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Mr.Yash K.Rajkumar",
    role: "Hypertension and Diabetes Patient",
    rating: 5,
    feedback: `"MediFindRx helped us reach more local patients without extra cost. Our walk-in traffic has visibly increased"`,
    image: "/images/yash.jpg" // Add this image to your public/images folder
  },
  {
    name: "Miss.Sunita Reddy",
    role: "Pharmacist, Wellness Forever",
    rating: 5,
    feedback: `"RxManager Pro made our inventory management seamless. We spend less time counting pills and more time with our patients."`,
    image: "/images/sunita.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.heading}>Loved by Pharmacies & Patients</h2>
      <p className={styles.subheading}>
        Don't just take our word for it. Here's what people are saying.
      </p>

      <div className={styles.cardsWrapper}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <img src={t.image} alt={t.name} className={styles.avatar} />
            <h3 className={styles.name}>{t.name}</h3>
            <p className={styles.role}>{t.role}</p>
            <div className={styles.stars}>
              {'★'.repeat(t.rating)}
            </div>
            <p className={styles.feedback}>{t.feedback}</p>
            <div className={styles.dots}>
              {[...Array(testimonials.length)].map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.active : ''}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
