import React from 'react';
import Nav from 'react-bootstrap/Nav';
import slideOpen from '../assets/slide-open.png';
import { SelectedSection } from '../App';


interface SectionNavProps {
  onToggleDrawer: () => void;
  selectedSections: SelectedSection[];
}

const SectionNav: React.FC<SectionNavProps> = ({ onToggleDrawer, selectedSections }) => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={onToggleDrawer}>
            <img src={slideOpen} alt="button" />
          </Nav.Link>
        </Nav.Item>
        {selectedSections.map((section) => (
          <Nav.Item key={section.id}>
            <Nav.Link>{section.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default SectionNav;
