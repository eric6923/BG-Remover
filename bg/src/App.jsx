import React from "react";
import Header from "./components/Header"; // Import Header component
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div className="App">
      <Header /> {/* Display Header at the top */}
      <UploadSection /> {/* Main content section */}
    </div>
  );
}

export default App;
