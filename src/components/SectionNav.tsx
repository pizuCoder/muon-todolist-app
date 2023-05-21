import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import slideOpen from '../assets/slide-open.png';
import { SelectedSection } from '../App';
import SectionPage from './SectionPage';

interface SectionNavProps {
  onToggleDrawer: () => void;
  selectedSections: SelectedSection[];
}

const SectionNav: React.FC<SectionNavProps> = ({ onToggleDrawer, selectedSections }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [sectionNames, setSectionNames] = useState<string[]>([]);

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
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

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={onToggleDrawer}>
            <img src={slideOpen} alt="button" />
          </Nav.Link>
        </Nav.Item>
        {sectionNames.map((sectionName) => (
          <Nav.Item key={sectionName}>
            {isTabActive(sectionName) ? (
              <Nav.Link active>{sectionName}</Nav.Link>
            ) : (
              <Nav.Link onClick={() => handleSectionClick(sectionName)}>
                {sectionName}
              </Nav.Link>
            )}
          </Nav.Item>
        ))}
      </Nav>
      {selectedSections.map((section) =>
        section.name === activeSection ? (
          <SectionPage key={section.id}  />
        ) : null
      )}
    </>
  );
};

export default SectionNav;
