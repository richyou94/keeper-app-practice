import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    })
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={props.handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
