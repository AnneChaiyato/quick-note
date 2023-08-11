import React from 'react';
import { useState } from 'react';
import randomColor from 'randomcolor';

function InputBox(props) {

    const [note, setNote] = useState({title: "", content: "", color: randomColor({luminosity: 'light',hue: 'blue'})});

    function handleChange(event){
        event.preventDefault();
        const {value, name} = event.target;

        setNote(prevValue => {
            return name === "title"? {title: value, content: prevValue.content, color:prevValue.color} : {title: prevValue.title, content: value, color: prevValue.color}
        })
    }

    return (
    <div>
        <form >
            <input name="title" placeholder="Title" onChange={handleChange} value={note.title}></input>
            <input name="content" placeholder="Note Content" onChange={handleChange} value={note.content}></input>
            <button 
            onClick={
                (event) => { 
                    event.preventDefault();
                    props.newNote(note);
                    setNote({title: "", content: "", color: randomColor({luminosity: 'light',hue: 'blue'})})
                }
            }>Add</button>
        </form>
    </div>
    );
}

export default InputBox;