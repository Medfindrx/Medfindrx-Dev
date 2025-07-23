import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.subheading}>You can reach us anytime</p>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Full Name</label>
            <input type="text" placeholder="Sanjay Kumar" />
          </div>
          <div className={styles.field}>
            <label>Last Name</label>
            <input type="text" placeholder="Singh" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="you@gmail.com" />
          </div>
          <div className={styles.field}>
            <label>Phone No</label>
            <input type="text" placeholder="+91-9889851215" />
          </div>
        </div>

        <div className={styles.field}>
          <label>Message</label>
          <textarea rows={4} placeholder="Type your message..." />
        </div>

        <button type="submit" className={styles.button}>Scheduled Demo</button>
      </form>
    </div>
  );
};

export default ContactForm;
