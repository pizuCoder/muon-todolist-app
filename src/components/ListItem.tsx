import React from 'react';

type ListItemProps = {
  onDelete: () => void;
  onEdit: () => void;
};

const ListItem: React.FC<ListItemProps> = ({ onDelete, onEdit }) => {
  return (
    <div>
      <p>Add New Item</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default ListItem;
