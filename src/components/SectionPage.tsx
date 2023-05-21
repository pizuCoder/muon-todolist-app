import React from 'react';

// interface SectionPageProps {
//   sectionName: string;
// }

const SectionPage: React.FC = () => {
  return (
    <div style={{height:'100vh'}}>
      {/* <h2>{sectionName}</h2> */}
      {/* Add section-specific content here */}
      <p style={{color: 'white'}}>Create To-Do List</p>
      <button>+</button>
    </div>
  );
};

export default SectionPage;
