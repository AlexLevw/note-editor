import React, { useRef, useEffect, FormEvent } from 'react';
import { INote } from '@components/index';
import styles from './NoteModal.module.scss';

interface Props {
  note: INote;
  closeModal: () => void;
}

export default function NoteModal({ note, closeModal }: Props) {
  const titleInputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const descriptionInputRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);

  function onSubmit(e: FormEvent): void {
    e.preventDefault();
    closeModal();
  }

  useEffect(() => {
    titleInputRef.current.value = note.title;
    descriptionInputRef.current.value = note.body;
  }, [titleInputRef, descriptionInputRef]);

  return (
    <div className={styles.modal} role="presentation" onClick={closeModal}>
      <div className={styles.main} role="presentation" onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} type="button" onClick={closeModal}>X</button>
        <form onSubmit={onSubmit}>
          <label className={styles.title} htmlFor="title">
            <p>Title:</p>
            <input type="text" name="title" ref={titleInputRef} />
          </label>
          <label className={styles.description} htmlFor="description">
            <p>Description:</p>
            <textarea name="description" ref={descriptionInputRef} />
          </label>
          <div className={styles.bottom}>
            <button type="button">Delete</button>
            <button type="button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
