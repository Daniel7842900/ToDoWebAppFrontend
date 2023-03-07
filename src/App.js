import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<ToDo />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
