// src/components/MemeMaker.js
import React, { useState, useRef } from 'react';
import htmlToImage from 'html-to-image';
import download from 'downloadjs';
import './MemeMaker.css';

const MemeMaker = () => {
  const [selectedLayers, setSelectedLayers] = useState([]);
  const memeRef = useRef(null);

  const layers = [
    { id: 1, src: './fox.jpeg' },
    { id: 2, src: './fox.jpeg' },
    // Add more layers as needed
  ];

  const addLayer = (layer) => {
    setSelectedLayers([...selectedLayers, layer]);
  };
  const downloadMeme = () => {
    htmlToImage.toPng(memeRef.current)
      .then((dataUrl) => {
        download(dataUrl, 'meme.png');
      });
  };

  return (
    <div className="meme-maker">
      <div className="preview">
        <div className="meme" ref={memeRef}>
          <img src="/path/to/fox.jpeg" alt="base" className="layer" />
          {selectedLayers.map((layer, index) => (
            <img key={index} src={layer.src} alt={`layer-${index}`} className="layer" />
          ))}
        </div>
      </div>
      <button onClick={downloadMeme}>Download Meme</button>
      <div className="controls">
        <div className="control-group">
          <h3>Select Layers</h3>
          {layers.map((layer) => (
            <img key={layer.id} src={layer.src} alt={`layer-${layer.id}`} onClick={() => addLayer(layer)} className="thumbnail" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemeMaker;