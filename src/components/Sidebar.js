

export default function Sidebar(props) {
    
    props.notes.sort((a,b) => b.updatedAt - a.updatedAt)

    const noteElements = props.notes.map((note, index) => {

        let noteTitle = note.body.split('\n')[0]

        return <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">
                    {noteTitle ? noteTitle : `Note ${index +1}` }
                </h4>
                <button 
                    className="delete-btn"
                    onClick={() => props.delete(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    })
    

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
