import React, { useRef, FormEvent } from 'react';
// import { INote } from '@components/index';
import styles from './NoteCreatorModal.module.scss';

interface Props {
  createNote: (title: string, body:string) => void;
  closeModal: () => void;
}

export default function NoteCreatorModal({ createNote, closeModal }: Props) {
  const titleInputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const descriptionInputRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);

  function onSubmit(e: FormEvent): void {
    e.preventDefault();
    createNote(titleInputRef.current.value, descriptionInputRef.current.value);
    closeModal();
  }

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
            <button className={styles.createBtn} type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
