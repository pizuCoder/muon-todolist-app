import React from 'react';

type SectionButtonProps = {
  onAddSection: () => void;
};

const SectionButton: React.FC<SectionButtonProps> = ({ onAddSection }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
      <div style={{ marginRight: '1rem' }}>Add Section</div>
      <button onClick={onAddSection}>+</button>
    </div>
  );
};

export default SectionButton;
