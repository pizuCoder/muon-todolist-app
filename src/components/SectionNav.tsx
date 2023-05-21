import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import slideOpen from '../assets/slide-open.png';
import { SelectedSection } from '../App';
import SectionPage from './SectionPage';
import SideDrawer from './SideDrawer';
import CloseButton from 'react-bootstrap/CloseButton';

interface SectionNavProps {
  onToggleDrawer: () => void;
  selectedSections: SelectedSection[];
  onEditSectionName: (oldName: string, newName: string) => void;
  onCloseSection: (sectionName: string) => void; // Add onCloseSection prop
}

const SectionNav: React.FC<SectionNavProps> = ({ onToggleDrawer, selectedSections, onEditSectionName, onCloseSection }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [sectionNames, setSectionNames] = useState<string[]>([]);

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const handleEditSectionName = (oldName: string, newName: string) => {
    if (oldName === activeSection) {
      setActiveSection(newName);
    }
    onEditSectionName(oldName, newName);
  };

  useEffect(() => {
    const uniqueNames: string[] = [];
    selectedSections.forEach((section) => {
      if (!uniqueNames.includes(section.name)) {
        uniqueNames.push(section.name);
      }
    });
    setSectionNames(uniqueNames);
  }, [selectedSections]);

  const isTabActive = (sectionName: string) => {
    return sectionName === activeSection;
  };

  const handleCloseSection = (sectionName: string) => {
    onCloseSection(sectionName);
    if (sectionName === activeSection) {
      setActiveSection('');
    }
  };

  return (
    <>
      <SideDrawer
        isOpen={false}
        onToggleDrawer={onToggleDrawer}
        handleSectionClick={handleSectionClick}
        activeSection={activeSection}
        sectionNames={sectionNames}
        onEditSectionName={handleEditSectionName}
      />
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={onToggleDrawer}>
            <img src={slideOpen} alt="button" />
          </Nav.Link>
        </Nav.Item>
        {sectionNames.map((sectionName) => (
          <Nav.Item key={sectionName}>
            {isTabActive(sectionName) ? (
              <Nav.Link active>
                {sectionName} <CloseButton variant="white" onClick={() => handleCloseSection(sectionName)} />
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => handleSectionClick(sectionName)}>
                {sectionName} <CloseButton variant="white" onClick={() => handleCloseSection(sectionName)} />
              </Nav.Link>
            )}
          </Nav.Item>
        ))}
      </Nav>
      {selectedSections.map((section) =>
        section.name === activeSection ? (
          <SectionPage key={section.id} />
        ) : null
      )}
    </>
  );
};

export default SectionNav;
