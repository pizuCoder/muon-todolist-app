import React from 'react';
import Nav from 'react-bootstrap/Nav';
import slideOpen from '../assets/slide-open.png'

interface SectionNavProps {
  onToggleDrawer: () => void;
}

const SectionNav: React.FC<SectionNavProps> = ({ onToggleDrawer }) => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={onToggleDrawer}>
            <img src={slideOpen} alt="button" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SectionNav;
