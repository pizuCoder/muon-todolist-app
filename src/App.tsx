import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopBar from './components/topBar';
import SideDrawer from './components/SideDrawer';
import SectionNav from './components/SectionNav'; 

interface AppProps {}

interface SelectedSection {
  id: number;
  name: string;
}

function App({}: AppProps): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [selectedSections, setSelectedSections] = useState<SelectedSection[]>([]);
  const sectionNavRef = useRef<HTMLDivElement>(null);
  const [sectionNavWidth, setSectionNavWidth] = useState(0);


  useEffect(() => {
    if (sectionNavRef.current) {
      const { width } = sectionNavRef.current.getBoundingClientRect();
      setSectionNavWidth(width);
    }
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSectionClick = (section: string) => {
    const newSection: SelectedSection = {
      id: selectedSections.length + 1,
      name: section,
    };
    setSelectedSections([...selectedSections, newSection]);
  };
  const handleEditSectionName = (oldName: string, newName: string) => {
    const updatedSections = selectedSections.map((section) => {
      if (section.name === oldName) {
        return {
          ...section,
          name: newName,
        };
      }
      return section;
    });
    setSelectedSections(updatedSections);
  };
  const onCloseSection = (sectionName: string) => {
    const updatedSections = selectedSections.filter((section) => section.name !== sectionName);
    setSelectedSections(updatedSections);
  };
  return (
    <div style={{ background: '#0f0f0f'}}>
      <TopBar />
      <SideDrawer
        isOpen={isDrawerOpen}
        onToggleDrawer={toggleDrawer}
        handleSectionClick={handleSectionClick}
        activeSection=""
        sectionNames={selectedSections.map((section) => section.name)}
        onEditSectionName={handleEditSectionName}
      />
      
        <SectionNav
          onToggleDrawer={toggleDrawer}
          selectedSections={selectedSections}
          onEditSectionName={handleEditSectionName}
          onCloseSection={onCloseSection}
        />
        {/* Render your SectionPage component here */}
      
    </div>
  );
}

export default App;
export { SelectedSection };