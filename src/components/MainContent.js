import React from 'react';
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import model from '../assets/glbAssets/kitchen.glb'; // Import the SVG

const MainContent = ({ selectedSection, selectedAttachment }) => {
  return (
    <main className="main-content">
      <div className="image-container">
        {selectedAttachment ? (
          <img src={selectedAttachment} alt="Selected Attachment" />
        ) : (
          <>
            <img
              aria-hidden="true"
              alt={selectedSection.toLowerCase()}
              src={kitchen.glb}
            />
           
          </>
        )}
      </div>
    </main>
  );
};

export default MainContent;
