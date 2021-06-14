import React from 'react';
import { INote } from '@components/index';
import Note from './Note/Note';
import styles from './Notes.module.scss';

interface Props {
  notes: Array<INote>;
  openCreator: () => void;
  selectNote: (note: INote) => void;
}

export default function Notes({ notes, openCreator, selectNote }: Props) {
  return (
    <div className={styles.notes}>
      {
        notes.map(
          (item: INote) => <Note note={item} selectNote={selectNote} key={item.id} />,
        )
      }
      <button className={styles.addBtn} type="button" onClick={openCreator}>Add</button>
    </div>
  );
}
