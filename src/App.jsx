import React from "react";
import Header from "./components/Header"; // Import Header component
import UploadSection from "./components/UploadSection";
import Learn from "./components/Learn";
import Remove1 from './components/Remove1'

function App() {
  return (
    <div className="App">
      <Header /> {/* Display Header at the top */}
      <UploadSection /> {/* Main content section */}
      <Learn/>
      <Remove1/>
    </div>
  );
}

export default App;
