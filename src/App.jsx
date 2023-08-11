import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import InputBox from './components/InputBox';
import { useState } from 'react';


function App() {

    const [list, setList] = useState([]);

    function insertNote(note) {
        setList(prevList => {return [...prevList, note]})
    }

    function deleteNote(id) {
        setList(prevList => prevList.filter((item, index) => index!==id))
    }

    return (
        <div>
            <Header /> 
            <InputBox newNote={insertNote}/>
            {list.map( (note, index) => <Note key={index} id={index} title={note.title} content={note.content} onClick={deleteNote} color={note.color}/>)}
            <Footer />
        </div>
        );

}

export default App;