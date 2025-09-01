import React, { useState } from "react";

interface Note {
    id: number;
    text: string;
}

interface NoteListProps {
    notes: Note[];
}

export const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    const [inputValue, setInputValue] = useState("");
    let [notesIn, setNotesIn] = useState(notes)


    const addNote = () => {
        alert(`New note added: ${inputValue}`);
        setInputValue("");
       notesIn =[
            ...notesIn,
            {
                id: notes.length + 1,
                text: inputValue ,

            },
        ];
       setNotesIn(notesIn);
       console.log(notes);
    };

    return (
        <div>
            <ol>
                {notesIn.map((note) => (
                    <li key={note.id}>{note.id}-{note.text}</li>
                ))}
            </ol>
            <input
                data-testid="note-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button data-testid="add-note-button" onClick={addNote}>
                Add Note
            </button>
        </div>
    );
};