import React, { useState } from "react";
import { useEffect } from "react";
import "./UploadSection.css";
import videoSource from '../assets/video.mp4';

function UploadSection() {

   

    useEffect(() => {
      const videoElement = document.querySelector("video");
      if (videoElement) {
        videoElement.play(); // Ensure video plays automatically when component mounts
      }
    }, []); // Empty dependency array ensures this runs only once when the component is first mounted
    
  const [file, setFile] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const removeBg = async (blob) => {
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", blob);

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "LJ3BbNRxqEgv7wcsK5AudR5r", // Ensure your API key is correct
        },
        body: formData,
      });

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: "image/png" });
        return URL.createObjectURL(blob); // Create URL for processed image
      } else {
        const errorText = `${response.status}: ${response.statusText}`;
        throw new Error(errorText); // Handle error if API fails
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setOutputImage(null);
    setMessage("Processing...");

    if (selectedFile) {
      try {
        const processedImageUrl = await removeBg(selectedFile); // Process the image
        setOutputImage(processedImageUrl); // Set processed image URL
        setMessage("Processing complete.");
        setIsModalOpen(true); // Open the modal after processing
      } catch (error) {
        setMessage(`Error: ${error.message}`); // Set error message if any
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click(); // Trigger file input when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    window.location.reload();
    setOutputImage(null); // Reset output image
  };

  return (
    <main className="upload-section">
      <div className="video-container">
        <video autoPlay muted className="video">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  
      <div className="upload-container">
        <div className="description">
          <h1>Remove Image Background</h1>
          <p>
            100% Automatically and <span className="highlight">Free</span>
          </p>
        </div>
  
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }} // Hide the file input
        />
        <button className="upload-btn" onClick={triggerFileInput}>
          Click to Upload Image
        </button>
  
        {message && <p className="status-message">{message}</p>} {/* Show status message */}
      </div>
  
      {/* Modal for processed image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Removed Background</h3>
            <img src={outputImage} alt="Processed" style={{ maxWidth: "100%" }} />
            <br />
            <a href={outputImage} download="processed-image.png">
              Download
            </a>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default UploadSection;
