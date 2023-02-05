import { useDispatch } from "react-redux";
import { setFilterText, useNotes } from "../store/notesSlice";

export const Header = () => {
    const dispatch = useDispatch();
    const { filterText } = useNotes();

    return (
        <div className='header'>
            <h1 className='title'>NotesApp</h1>
            <input type="text"
                placeholder='Search...'
                className='search-bar'
                value={filterText}
                onChange={e => dispatch(setFilterText(e.target.value))} />
        </div>
    );
};