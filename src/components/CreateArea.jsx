import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isNoted, setIsNoted] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleSelect = () => {
    console.log('selected');
    setIsNoted(true)
  };

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
    });
    setIsNoted(false);
    e.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {isNoted && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onSelect={handleSelect}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isNoted ? 3 : 1}
        />
        {isNoted && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
