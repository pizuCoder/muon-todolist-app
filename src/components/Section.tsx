import React from 'react';

interface SectionProps {
  name: string; // Change type to string
  sectionNames: string[];
  onEditSection: () => void;
  onDeleteSection: () => void;
  onSelectSection: () => void;
}

const Section: React.FC<SectionProps> = ({
  name,
  sectionNames,
  onEditSection,
  onDeleteSection,
  onSelectSection,
}) => {
  const handleEditSection = () => {
    onEditSection();
  };

  const handleDeleteSection = () => {
    onDeleteSection();
  };

  const handleSelectSection = () => {
    onSelectSection();
  };

  return (
    <div className="section">
      <p onClick={handleSelectSection}>{name}</p>
      <div className="section-buttons">
        <button className="edit-button" onClick={handleEditSection}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDeleteSection}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Section;
