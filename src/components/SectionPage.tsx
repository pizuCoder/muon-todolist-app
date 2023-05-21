import React, { useState } from 'react';
import EditDrawer from './EditDrawer';
import ListItem from './ListItem';

const SectionPage: React.FC = () => {
  const [lists, setLists] = useState<string[]>([]);
  const [listCount, setListCount] = useState(0);
  const [editListIndex, setEditListIndex] = useState(-1);

  const addList = () => {
    const newListName = `List-${listCount + 1}`;
    setLists((prevLists) => [...prevLists, newListName]);
    setListCount((prevCount) => prevCount + 1);
  };

  const openEditDrawer = (index: number) => {
    setEditListIndex(index);
  };

  const closeEditDrawer = () => {
    setEditListIndex(-1);
  };

  const saveEditDrawer = (newListName: string) => {
    if (newListName.trim() !== '') {
      const updatedLists = [...lists];
      updatedLists[editListIndex] = newListName;
      setLists(updatedLists);
    }
  };

  const addListItem = () => {
    const newItemName = 'Add New Item';
    const updatedLists = [...lists];
    updatedLists.push(newItemName);
    setLists(updatedLists);
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      {lists.map((list, index) => (
        <div key={index} style={{ margin: '0 1rem', padding: '1rem' }}>
          <p>
            {list} <button style={{ margin: '0 1rem' }} onClick={addListItem}>+</button>
            <button onClick={() => openEditDrawer(index)}>Edit</button>
          </p>
          {index === lists.length - 1 && <ListItem onDelete={() => {}} onEdit={() => {}} />}
        </div>
      ))}
      <div style={{ color: 'white', margin: '0 1rem', padding: '1rem' }}>
        Create To-Do List <button onClick={addList}>+</button>
      </div>

      {editListIndex !== -1 && (
        <EditDrawer
          listName={lists[editListIndex]}
          onClose={closeEditDrawer}
          onSave={saveEditDrawer}
        />
      )}
    </div>
  );
};

export default SectionPage;
