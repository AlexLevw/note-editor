import Header from './Header/Header';
import Notes from './Notes/Notes';
import Footer from './Footer/Footer';
import NoteModal from './NoteModal/NoteModal';
import NoteCreatorModal from './NoteCreatorModal/NoteCreatorModal';

export interface INote {
  title: string;
  body: string;
  id: string;
}

export {
  Header, Notes, Footer, NoteModal, NoteCreatorModal,
};
