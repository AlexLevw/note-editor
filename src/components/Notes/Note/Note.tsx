import React from 'react';
import styles from './Note.module.scss';

interface Props {
  title: string;
}

export default function Note({ title }: Props) {
  return (
    <div className={styles.note}>
      <p className={styles.title}>{title}</p>
      <div className={styles.rightBlock}>
        <button className={styles.editBtn} type="button">Edit</button>
        <button className={styles.removeBtn} type="button">Delete</button>
      </div>
    </div>
  );
}
