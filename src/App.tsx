import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import RootLayout from "./_root/RootLayout";
import { Routes , Route} from 'react-router-dom'
import { Movies , Series , Home } from "./_root/pages";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
