import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import ListNotes from "./content/ListNotes";
import CreateNote from "./content/CreateNote";
import ShowNote from "./content/ShowNote";
import NotFound from "./content/NotFound";

import { BASE_URL } from "./config";
import { useThemeContext } from "./hooks/useThemeContext";

const   Routes = () => {
  const { darkMode } = useThemeContext();

  return (
    <div data-bs-theme={darkMode ? "dark" : "light"} className={`${darkMode ? 'bg-dark' : ''}`} style={{ height: "100%", overflowY: 'hidden', minHeight: '100vh' }}>
      <div className="container">
        <div className="mt-md-4 d-flex flex-column justify-content-center">
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter basename={BASE_URL}>
              <RouterRoutes>
                <Route path="/" element={<ListNotes/>} />
                <Route path="/note/new" element={<CreateNote/>} />
                <Route path="/notes/:noteId" element={<ShowNote/>} />
                <Route element={<NotFound/>} />
              </RouterRoutes>
            </BrowserRouter>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export { Routes };
