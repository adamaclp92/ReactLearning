import React from "react"

export default function Sidebar(props) {

    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                {/*<h4 className="text-snippet">Note {index + 1} </h4>*/}
                <h4 className="text-snippet">{note.body.split('\n')[0]} </h4>
                {/*<h4 className="text-snippet">{note.id} </h4>*/}
                <button className="delete-note" onClick={(event) => props.deleteNote(event, note.id)}>-</button>
            </div>
        </div>
    ))



    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
