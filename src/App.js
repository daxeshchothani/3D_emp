import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import './App.css';


// Import images from assets folder
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import image7 from './assets/7.png'; 
import image8 from './assets/8.png';
import image9 from './assets/9.png';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('Living Room');
  const [showAttachment, setShowAttachment] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setShowAttachment(false);
    setSelectedAttachment(null);
  };

  const toggleAttachment = () => {
    setShowAttachment(!showAttachment);
  };

  const handleAttachmentClick = (image) => {
    setSelectedAttachment(image);
  };

  const images = [image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <div className="App">
      <LeftSidebar handleSectionClick={handleSectionClick} />
      <MainContent selectedSection={selectedSection} selectedAttachment={selectedAttachment} />
      <RightSidebar toggleAttachment={toggleAttachment} showAttachment={showAttachment} handleAttachmentClick={handleAttachmentClick} images={images} />
    </div>
  );
};

export default App;
