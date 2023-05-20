import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopBar from './components/topBar';
import SideDrawer from './components/SideDrawer';
import SectionNav from './components/SectionNav';

function App(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div style={{background:"#0f0f0f"}}>
      <TopBar />
      <SideDrawer isOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
      <SectionNav onToggleDrawer={toggleDrawer} />
    </div>
  );
}

export default App;
