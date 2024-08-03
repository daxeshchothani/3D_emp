import React, { useState } from 'react';

// Import images from assets folder
import image2  from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import model from '../assets/model.svg'; // Import the SVG

const RoomCollection = () => {
  // State to manage the selected section
  const [selectedSection, setSelectedSection] = useState('Living Room');
  const [showAttachment, setShowAttachment] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null); // New state for selected attachment

  // Function to handle section click
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setShowAttachment(false); // Close attachment section when switching sections
    setSelectedAttachment(null); // Reset selected attachment
  };

  // Function to toggle attachment section
  const toggleAttachment = () => {
    setShowAttachment(!showAttachment);
  };

  // Function to handle attachment click
  const handleAttachmentClick = (image) => {
    setSelectedAttachment(image);
  };

  return (
    <div className="App">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h2>3D emp</h2>
        <h3>Rooms Collections</h3>
        <ul>
          <li onClick={() => handleSectionClick('Living Room')}>Living Room</li>
          <li onClick={() => handleSectionClick('Bedroom')}>Bedroom</li>
          <li onClick={() => handleSectionClick('Kitchen')}>Kitchen</li>
          <li onClick={() => handleSectionClick('Bathroom')}>Bathroom</li>
          <li onClick={() => handleSectionClick('Dining Room')}>Dining Room</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="image-container">
          {selectedAttachment ? (
            <img src={selectedAttachment} alt="Selected Attachment" />
          ) : (
            <>
              <img
                aria-hidden="true"
                alt={selectedSection.toLowerCase()}
                src={model} // Use the imported SVG
              />
              <div className="caption">
                <h4>Cozy {selectedSection}</h4>
                <p>A perfect blend of comfort and style.</p>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Right Sidebar for Options */}
      <aside className="right-sidebar">
        <h2>Options</h2>
        <ul>
          <li onClick={toggleAttachment}>Attachment</li>
          {/* Add more options as needed */}
        </ul>

        {showAttachment && (
          <div className="attachment-section">
            <h4>Attachment Section</h4>
            <p>Here are your attached files:</p>
            <div className="attachment-images">
              <img src={image2} alt="Attachment 1" onClick={() => handleAttachmentClick(image2)} />
              <img src={image3} alt="Attachment 2" onClick={() => handleAttachmentClick(image3)} />
              <img src={image4} alt="Attachment 3" onClick={() => handleAttachmentClick(image4)} />
              <img src={image5} alt="Attachment 1" onClick={() => handleAttachmentClick(image5)} />
              <img src={image6} alt="Attachment 2" onClick={() => handleAttachmentClick(image6)} />
              <img src={image7} alt="Attachment 3" onClick={() => handleAttachmentClick(image7)} />
              <img src={image8} alt="Attachment 1" onClick={() => handleAttachmentClick(image8)} />
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default RoomCollection;