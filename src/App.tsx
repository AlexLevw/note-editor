import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Header, Notes, Footer, NoteModal, NoteCreatorModal, INote,
} from '@components/index';
import styles from './App.module.scss';

function App() {
  const [selectedNote, setSelectedNote] = useState<INote | null>(null);
  const [isCreatorOpen, setIsCreatorOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<Array<INote> | []>([]);

  function openCreator(): void {
    setIsCreatorOpen(true);
  }

  function closeCreator(): void {
    setIsCreatorOpen(false);
  }

  function selectNote(note: INote): void {
    setSelectedNote(note);
  }

  function closeNoteModal(): void {
    setSelectedNote(null);
  }

  function createNote(title: string, body: string) {
    const newNote: INote = { title, body, id: uuidv4() };
    setNotes([...notes, newNote]);
  }

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <Notes notes={notes} openCreator={openCreator} selectNote={selectNote} />
        <Footer />
        { selectedNote && <NoteModal note={selectedNote} closeModal={closeNoteModal} /> }
        { isCreatorOpen && <NoteCreatorModal createNote={createNote} closeModal={closeCreator} />}
      </div>
    </div>
  );
}

export default App;
