import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ChaptersList from "./components/ChaptersList";
import ContentPanel from "./components/ContentPanel";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <Tabs />
          <div className="line">
            
          </div>
          <div className="dashboard-content">
            <ChaptersList />
            <ContentPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
