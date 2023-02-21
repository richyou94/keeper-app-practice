import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Header />
      <Note key={1} title="Note title" cotent="Note content" />
      <Footer />
    </div>
  );
}

export default App;
