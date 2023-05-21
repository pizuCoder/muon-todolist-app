import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import './EditDrawer.css';

type EditDrawerProps = {
  listName: string;
  onClose: () => void;
  onSave: (newListName: string) => void;
};

const EditDrawer: React.FC<EditDrawerProps> = ({ listName, onClose, onSave }) => {
  const [editListName, setEditListName] = useState(listName);

  const handleEditListNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditListName(event.target.value);
  };

  const handleSave = () => {
    onSave(editListName);
    onClose();
  };

  return (
    <div className={`edit-drawer open`}>
      <input type="text" value={editListName} onChange={handleEditListNameChange} />
      <button onClick={handleSave}>Save</button>
      <CloseButton onClick={onClose} />
    </div>
  );
};

export default EditDrawer;
