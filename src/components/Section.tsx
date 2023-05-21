import React from 'react';

interface SectionProps {
    name: string;
    onEditSection: () => void;
    onDeleteSection: () => void;
    onSelectSection: () => void;
  }

  const Section: React.FC<SectionProps> = ({ name, onEditSection, onDeleteSection, onSelectSection }) => {
    return (
      <div className="section" onClick={onSelectSection} style={{cursor:"pointer", padding: '1rem'}}>
        <p className="section-name">{name}</p>
        <button className="edit-button" onClick={onEditSection}>Edit</button>
        <button className="delete-button" onClick={onDeleteSection}>Delete</button>
      </div>
    );
  };

export default Section;