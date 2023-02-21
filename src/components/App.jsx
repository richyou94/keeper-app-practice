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
    })
    setNote((prev) => {
      return {
        title: "",
        content: "",
      }
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} handleChange={handleChange} note={note} />
      <Note key={1} title="Note title" cotent="Note content" />
      <Footer />
    </div>
  );
}

export default App;
