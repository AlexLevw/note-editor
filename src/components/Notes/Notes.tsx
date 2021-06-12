import React, { useState, useEffect } from 'react';
import Note from './Note/Note';
import styles from './Notes.module.scss';

export interface INotes {
  title: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Array<INotes> | []>([]);

  useEffect(() => {
    setNotes([
      { title: 'My note' },
      { title: 'New note' },
    ]);
  }, []);

  return (
    <div className={styles.notes}>
      {
        notes.map((item: INotes) => <Note title={item.title} />)
      }
    </div>
  );
}
