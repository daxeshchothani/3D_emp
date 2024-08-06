import React from 'react';

const LeftSidebar = ({ handleSectionClick }) => {
  return (
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
  );
};

export default LeftSidebar;
