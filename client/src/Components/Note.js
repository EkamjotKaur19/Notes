import React, { useState } from 'react'
import Popup from './Crud/Popup'
import EditPop from '../Components/Crud/EditPop'
import Download from './Crud/Download'
import noteService from '../services/notes'
import copy from "copy-to-clipboard";  
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Note({ onDelete, id, setNote, setNotes, notes, editNote, note, color, file, pin, showpin, icons, date}) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayForm, setForm] = useState(false);
  const [downPop, setDownPop]=useState(false)
  const [dates, setDates] = useState(date);
    
    const copyToClipboard = () => {
      toast.success(`You have copied "${note.content}"`);
      copy(note.content);
    }

    const dateFunc = () => {
      setDates(new Date().getDay())
    }
  

  function handleEdit(e) {
    e.preventDefault();
    const title = e.target.children[0].value;
    const content = e.target.children[1].value;
    editNote(note, title, content);

    setForm(false);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const toggleDown = () => {
    setDownPop(!downPop);
  }

  const handlePop = () => {
    setIsOpen(!isOpen);
  }

  const togglePin = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    console.log(note);
    const changedNote = { ...note, pin: !note.pin }

    noteService.update(url, changedNote).then(response => {
      setNotes(notes.map(n => n.id !== id ? n : response.data))
    })

  }

  const handleEditForm = () => {
    icons=!icons;
    setForm(!displayForm);
  }

  const handleDownPop = () => {
    icons=!icons;
    setDownPop(!downPop);
  }


  return (
    <>
    <div className="note" style={{backgroundColor:color}} >
      <p onClick={togglePin} >{pin ? <i className="pin fa-solid fa-map-pin"></i> : ""}</p>
      <div>
        {file!==" " && <img className='note-img' src={file} alt=""  onClick={handlePop} />}
        <h1 >{note.title}</h1>
        
        <p onClick={togglePopup} value={note.content} >{file===" " && note.content!==undefined?  note.content.substring(0,140): ' '}</p>
      </div>
      <div className="note-btns">
        <button className={icons? 'note-button show' : 'note-button hide'}  onClick={() => onDelete(id, note)}>
        <i className="fa-solid fa-trash"></i>
        </button>

        <button className={icons? 'note-button show' : 'hide'} onClick={() => handleEditForm()}>
          Edit
        </button>

        <button className={icons? 'note-button show' : 'hide'} onClick={() =>  handleDownPop()}>
          Download
        </button>

        <button className={icons? 'note-button show' : 'hide'} onClick={copyToClipboard}>
          Copy 
        </button>
      </div>

      
    </div>



      
    

    { displayForm && <EditPop displayForm={displayForm} handleEdit={handleEdit} setForm={setForm} note={note}/>}

    { downPop && <Download content={note.content} title={note.title} file={file} handleClose={toggleDown} />}

    { isOpen && <Popup content={note.content} handleClose={togglePopup} color={color} setNote={setNote} file={file} />}
    </>
  )
}
