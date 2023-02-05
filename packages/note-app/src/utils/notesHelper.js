export const getStoredNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
};

export const updateStoredNotes = (notes = []) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};