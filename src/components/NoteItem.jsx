import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import ActiveButton from "./ActiveButton";
import { showFormattedDate } from "../utils/";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
    return (
        <div className="note-item">

            <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body} />

            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    archived ? 
                    <ActiveButton id={id} onActive={onActive} /> 
                    : 
                    <ArchiveButton id={id} onArchive={onArchive} />
                }
            </div>
        </div>
    );   
}

export default NoteItem;