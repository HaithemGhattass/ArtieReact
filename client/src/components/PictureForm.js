import { useState, useRef } from "react";

const UPLOAD_URL = "http://localhost:9090/image";

const PictureForm = () => {
  const [image, setImage] = useState(null);
  const [childAge, setChildAge] = useState(null);

 
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload =  () => {
        const img = new Image();
        img.src = reader.result;
        img.onload =  () => {
          /*
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const vectors = countVectors(imageData.data);
            const isbw = checkbw(imageData.data)
            if(!isbw && vectors > 200000){
              alert("Image is colored and too complex");
              return;
            } else
            if (vectors > 200000) {
              alert("Image is too complex!");
              return;
            } else 
           if(!isbw){
              alert("Image is colored!");
              return;
            } 

            */
            

            setImage(file);
        };
      };
      reader.readAsDataURL(file);

  };
  const checkbw = (data) => {
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] !== data[i + 1] || data[i + 1] !== data[i + 2]) {
        return false;
      }
    }
    return true;
  }
  
  const countVectors = (data) => {
    let vectors = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (
        data[i] !== data[i + 4] ||
        data[i + 1] !== data[i + 5] ||
        data[i + 2] !== data[i + 6]
      ) {
        vectors++;
      }
    }
    return vectors;
  };

  
  const handleDragOver = (event) => {
    event.preventDefault();
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("childAge", childAge);
    if(childAge == null){
      alert("please enter the child age!");
    } else if ( childAge > 12){
      alert("child should be under than 12!");
    }
    else {
    try {
      
    
        const response = await fetch(UPLOAD_URL, {
          method: "POST",
          body: formData,
        });
        setImage(null);
        setChildAge(null);
  
        alert("Image uploaded successfully!");
      } catch (error) {
          alert("Error uploading image: ", error);
      }
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
