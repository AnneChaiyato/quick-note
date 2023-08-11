import React from 'react';

function Note(props) {

    return (<div className="note" style={{backgroundColor: props.color}}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={() => {
                    props.onClick(props.id)
                }}>DELETE</button>
            </div>)
}

export default Note;