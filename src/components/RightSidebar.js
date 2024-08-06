import React from 'react';

const RightSidebar = ({ toggleAttachment, showAttachment, handleAttachmentClick, images }) => {
  return (
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
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Attachment ${index + 1}`} onClick={() => handleAttachmentClick(image)} />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;
