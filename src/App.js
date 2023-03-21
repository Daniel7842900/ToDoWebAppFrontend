import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashCan,
  faPlus,
  faXmark,
  faBars,
  faUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ToDo from "./pages/ToDo";

function App() {
  library.add(
    faTrashCan,
    faPlus,
    faXmark,
    faBars,
    faUser,
    faGear,
    faArrowRightFromBracket
  );
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
