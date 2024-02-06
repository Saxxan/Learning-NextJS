import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { AllMeetups } from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

// Layout component
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
