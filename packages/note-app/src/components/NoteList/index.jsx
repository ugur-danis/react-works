import { useNotes } from "../../store/notesSlice";
import NoteItem from "./NoteItem";

const NoteList = () => {
    const { notes, filterText } = useNotes();
    const filteredNotes = notes.filter(n => n.text.includes(filterText));

    return (
        <>
            <div className='note-list-container'>
                {
                    filteredNotes.map((note, i) => <NoteItem key={i} note={note} />)
                }
            </div>
            {
                filteredNotes.length < 1 && <NoContent />
            }
        </>
    );
};

const NoContent = () => (
    <div className="no-content-container">
        <h1>You have no notes :(</h1>
    </div>
);

export default NoteList;