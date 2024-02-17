import React from 'react';

// Styles
import styles from './styles.module.css';

function BlogCard() {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>Blog Title</h2>
      <p className={styles.date}>January 1, 2021</p>
      <p className={styles.excerpt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod,
        felis nec aliquam lacinia, ligula purus aliquet odio, in bibendum quam
        nunc nec justo. Nulla facilisi. Donec nec justo et nunc auctor
        facilisis. Cras nec libero in lectus tincidunt tincidunt. Sed auctor,
        odio nec tincidunt luctus, libero urna lacinia dui, auctor pellentesque
        purus elit nec libero
      </p>
    </article>
  );
}

export default BlogCard;