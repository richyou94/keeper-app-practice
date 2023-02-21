import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    setNotes((prev) => {
      return [...prev, note];
    });

    setNote((prev) => {
      return {
        title: "",
        content: "",
      };
    });
  };

  const deleteNote = (id) => {
    
    setNotes((prev) => {
      return prev.filter((element, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} handleChange={handleChange} note={note} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            removeNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
