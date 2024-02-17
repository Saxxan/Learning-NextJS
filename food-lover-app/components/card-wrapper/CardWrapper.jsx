import React from 'react';

// Styles
import styles from './styles.module.css';

function CardWrapper({ children }) {
  return (
    <section className={styles.cardWrapper}>
        {children}
    </section>
  )
}

export default CardWrapper