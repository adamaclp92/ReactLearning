import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
//import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
   
    //Ha a useState-ben function-t hozunk létre, akkor csak 1szer rendereli azt az objektumot, nem minden egyes változtatásnál
    //És a localStorage.getItem() elég költségigényes parancs, ezért azt elég akkor renderelni, amikor betölt az app
    const [notes, setNotes] = React.useState(() => JSON.parse(window.localStorage.getItem('notes')) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    //úgy van megoldva, hogy ha módosítok egy note-on, akkor az unshift miatt az első helyre kerül az elem
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i <oldNotes.length; i++){
                if(oldNotes[i].id === currentNoteId){
                    newArray.unshift({...oldNotes[i], body: text})
                }else{
                    newArray.push(oldNotes[i])
                }
            }
            return newArray
        })
    }

    function deleteNote(event, noteId){
        event.stopPropagation()

        setNotes(oldNotes => oldNotes.filter(note => noteId !== note.id))

    }
  



    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))

    }, [notes])



    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
