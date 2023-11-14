import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ searchNote }) {
    return (
        <div className="note-app__header">
            <h1>Notes App</h1>
            <NoteSearch searchNote={searchNote} />
        </div>
    );
}

export default NoteHeader;