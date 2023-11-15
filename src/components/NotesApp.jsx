import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onActiveHandler = this.onActiveHandler.bind(this);
    }

    onSearchHandler({ search }) {
        this.setState(() => {
            return {
                search: search,
            }
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString,
                        archived: false,
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
    }

    onArchiveHandler(id) {
        this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true} : note) });
    }

    onActiveHandler(id) {
        this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
    }

    render() {
        return (
            <>
                <NoteHeader searchNote={this.onSearchHandler} />
                <NoteBody addNote={this.onAddNoteHandler} notes={this.state.notes} search={this.state.search} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
            </>
        )
    }
}

export default NotesApp;