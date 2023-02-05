import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../store/notesSlice";

const COLORS = [
    '#fc6464',
    '#ffbd33',
    '#33ffbd',
    '#e875fa'
];

export const NewNote = () => {
    const dispatch = useDispatch();
    const textareaRef = useRef();
    const [note, setNote] = useState('');
    const [color, setColor] = useState(COLORS.at(0));

    const handleChange = e => setNote(e.target.value);
    const handleEnterKey = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onAddNote();
        }
    };
    const onAddNote = e => {
        if (note.length < 1) {
            return alert('Note is not empty');
        }
        dispatch(addNote({ text: note, color }));
        setNote('');
        textareaRef.current.focus();
    };

    return (
        <div className='new-note-container'>
            <textarea onKeyDown={handleEnterKey} autoFocus
                placeholder='Enter your note here...'
                ref={textareaRef}
                value={note}
                onChange={handleChange} />
            <div className='new-note-footer'>
                <ul className='new-note-color-list'>
                    {COLORS.map((c, i) => (
                        <li key={i}
                            className={`hover-shrinkage-effect pointer ${c === color ? 'selected-color' : ''}`}
                            style={{ background: c }}
                            onClick={e => setColor(c)}
                        />
                    ))}
                </ul>
                <button className='add-button hover-shrinkage-effect pointer' onClick={onAddNote}>ADD</button>
            </div>
        </div>
    );
};