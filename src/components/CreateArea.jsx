import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.addNote}>
        <input onChange={props.handleChange} name="title" placeholder="Title" value={props.note.title} />
        <textarea onChange={props.handleChange} name="content" placeholder="Take a note..." rows="3" value={props.note.content} />
        <button  >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
