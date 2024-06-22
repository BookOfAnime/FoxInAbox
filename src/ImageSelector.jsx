// src/components/ImageSelector.js
import React, { useState } from "react";
import "./ImageSelector.css";

const ImageSelector = () => {
  const [selectedBaseImage, setSelectedBaseImage] = useState(null);
  const [selectedOverlay1, setSelectedOverlay1] = useState(null);
  const [selectedOverlay2, setSelectedOverlay2] = useState(null);
  const [selectedOverlay3, setSelectedOverlay3] = useState(null);
  const [selectedOverlay4, setSelectedOverlay4] = useState(null);

  const baseImages = [
    "./fox.jpeg",
    "./fox.jpeg",
    "./fox.jpeg",
    "./fox.jpeg",
    "./fox.jpeg",
  ];

  const overlayImages1 = [
    "./hat.png",
    "./hat.png",
    "./hat.png",
    "./hat.png",
    "./hat.png",
  ];

  const overlayImages2 = [
    "./Aura.webp",
    "./Aura.webp",
    "./Aura.webp",
    "./Aura.webp",
    "./Aura.webp",
  ];

  const overlayImages3 = [
    "./alien.png",
    "./alien.png",
    "./alien.png",
    "./alien.png",
    "./alien.png",
  ];

  const overlayImages4 = [
    "./alien.png",
    "./alien.png",
    "./alien.png",
    "./alien.png",
    "./alien.png",
  ];

  return (
    <div className="image-selector">
      <div className="preview">
        <h4>Preview</h4>
        <div className="meme">
          {selectedBaseImage && (
            <img
              src={selectedBaseImage}
              alt="selected-base"
              className="layer"
            />
          )}
          {selectedOverlay1 && (
            <img
              src={selectedOverlay1}
              alt="selected-overlay1"
              className="layer overlay"
            />
          )}
          {selectedOverlay2 && (
            <img
              src={selectedOverlay2}
              alt="selected-overlay2"
              className="layer overlay"
            />
          )}
          {selectedOverlay3 && (
            <img
              src={selectedOverlay3}
              alt="selected-overlay3"
              className="layer overlay"
            />
          )}
          {selectedOverlay4 && (
            <img
              src={selectedOverlay4}
              alt="selected-overlay4"
              className="layer overlay"
            />
          )}
        </div>
      </div>

      <h3>Select a Base Image</h3>
      <div className="image-row">
        {baseImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`base-${index}`}
            onClick={() => setSelectedBaseImage(src)}
            className={selectedBaseImage === src ? "selected" : ""}
          />
        ))}
      </div>

      <h3>Select Overlay 1</h3>
      <div className="image-row">
        {overlayImages1.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`overlay1-${index}`}
            onClick={() => setSelectedOverlay1(src)}
            className={selectedOverlay1 === src ? "selected" : ""}
          />
        ))}
      </div>

      <h3>Select Overlay 2</h3>
      <div className="image-row">
        {overlayImages2.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`overlay2-${index}`}
            onClick={() => setSelectedOverlay2(src)}
            className={selectedOverlay2 === src ? "selected" : ""}
          />
        ))}
      </div>

      <h3>Select Overlay 3</h3>
      <div className="image-row">
        {overlayImages3.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`overlay3-${index}`}
            onClick={() => setSelectedOverlay3(src)}
            className={selectedOverlay3 === src ? "selected" : ""}
          />
        ))}
      </div>

      <h3>Select Overlay 4</h3>
      <div className="image-row">
        {overlayImages4.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`overlay4-${index}`}
            onClick={() => setSelectedOverlay4(src)}
            className={selectedOverlay4 === src ? "selected" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;