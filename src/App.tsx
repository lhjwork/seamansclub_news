import React from "react";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/explore" element={<Explore />} />
           */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
