import { useState, useRef } from "react";
import axios from "axios";

const UPLOAD_URL = "http://localhost:9090/image";

const PictureForm = () => {
  const [image, setImage] = useState(null);
  const [childAge, setChildAge] = useState(0);

 
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("childAge", childAge);


    try {
      const response = await fetch(UPLOAD_URL, {
        method: "POST",
        body: formData,
      });
      setImage(null);
      setChildAge(0);

      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  const handleInputChange = (event) => {
    setChildAge(parseInt(event.target.value));
  };
  const squareStyle = {
    width: "100%",
    maxWidth: "500px", // Optional: Limit the maximum width of the square
    height: 0,
    paddingBottom: "25%", // Height is a quarter of the width
    position: "relative",
    margin: "0 auto",
    border: "2px dashed #ccc",
    borderRadius: "10px",
    cursor: "pointer",
    overflow: "hidden"
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };
  const inputStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)"
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={squareStyle}
    >
      <form onSubmit={handleSubmit}>
        
        {image ? (
          <div>
            <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
            <input
              type="number"
              placeholder="Child's Age"
              value={childAge}
              onChange={(e) => setChildAge(parseInt(e.target.value))}
              style={inputStyle}
            />
            <button
              type="submit"
              style={buttonStyle}
            >
              Upload
            </button>          </div>
        ) : (
          <p>Drag and drop an image file onto this page.</p>
        )}
                   
      </form>
    </div>
  );
};

export default PictureForm;
