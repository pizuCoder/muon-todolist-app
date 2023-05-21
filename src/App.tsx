import React, { useState } from 'react';
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

  return (
    <div style={{ background: '#0f0f0f' }}>
      <TopBar />
      <SideDrawer
        isOpen={isDrawerOpen}
        onToggleDrawer={toggleDrawer}
        handleSectionClick={handleSectionClick}
      />
      <SectionNav
        onToggleDrawer={toggleDrawer}
        selectedSections={selectedSections}
      />
    </div>
  );
}

export default App;
export { SelectedSection };