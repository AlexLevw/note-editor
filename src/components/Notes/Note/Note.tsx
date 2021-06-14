import React from 'react';
import { INote } from '@components/index';
import styles from './Note.module.scss';

interface Props {
  note: INote;
  selectNote: (note: INote) => void;
}

export default function Note({ note, selectNote }: Props) {
  function onNoteClick(): void {
    selectNote({ title: note.title, body: note.body, id: note.id });
  }

  return (
    <button className={styles.note} type="button" onClick={onNoteClick}>
      <p className={styles.title}>{note.title}</p>
      {/* <div className={styles.rightBlock}>
        <button className={styles.editBtn} type="button">Edit</button>
        <button className={styles.removeBtn} type="button">Delete</button>
      </div> */}
    </button>
  );
}
