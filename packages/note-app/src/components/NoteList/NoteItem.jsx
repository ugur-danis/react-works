import { useDispatch } from "react-redux";
import { removeNote } from "../../store/notesSlice";

const NoteItem = ({ note }) => {
    const dispatch = useDispatch();

    const onRemoveNote = () => {
        dispatch(removeNote(note));
    };

    return (
        <div className='note-card' style={{ background: note.color, boxShadow: '0px 0px 2px 1px ' + note.color }}>
            <div className="note-card-header">
                <h3>{note.text}</h3>
            </div>
            <div className="note-card-footer">
                <button className="pointer hover-shrinkage-effect" onClick={onRemoveNote}>Sil</button>
            </div>
        </div>
    );
};

export default NoteItem;