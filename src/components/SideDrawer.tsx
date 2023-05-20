import React, { useState } from "react";
import "./SideDrawer.css";

import slideLeftBtn from "../assets/slide-left.png";
import displayPicture from "../assets/displaypicture.png";
import homeIcon from "../assets/homeIcon.png";
import SectionButton from "./addSection";
import Section from "./Section";
import SectionNav from "./SectionNav";

interface SideDrawerProps {
  isOpen: boolean;
  onToggleDrawer: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onToggleDrawer }) => {
  const [sections, setSections] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>("");

  function closeBtn(): void {
    onToggleDrawer();
  }

  const addSection = () => {
    const newSection = `Section-${sections.length + 1}`;
    setSections([...sections, newSection]);
  };

  const editSection = (index: number) => {
    const newName = prompt("Enter new section name");
    if (newName) {
      const updatedSections = [...sections];
      updatedSections[index] = newName;
      setSections(updatedSections);
    }
  };

  const deleteSection = (index: number) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div className={`side-drawer ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeBtn}>
          {" "}
          <img src={slideLeftBtn} alt="Close" />{" "}
        </button>
        <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
          <img
            src={displayPicture}
            alt="Display Picture"
            style={{ borderRadius: "50%", marginRight: "0.5rem" }}
          />
          <p style={{ margin: 0, color: "white" }}>CryptoUser13</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
          <img
            src={homeIcon}
            alt="Home Icon"
            style={{ marginRight: "0.5rem" }}
          />
          <p style={{ margin: 0, color: "white", fontSize: ".8rem" }}>Home</p>
        </div>
        <SectionButton onAddSection={addSection} />
        {sections.map((section, index) => (
          <Section
            key={index}
            name={section}
            onEditSection={() => editSection(index)}
            onDeleteSection={() => deleteSection(index)}
            onSelectSection={() => handleSectionClick(section)}
          />
        ))}
      </div>
    </>
  );
};

export default SideDrawer;
