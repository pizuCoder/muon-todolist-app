import React, { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

export default function TopBar(): JSX.Element {
  const [show, setShow] = useState<boolean>(true);

  function closeBtn(): void {
    setShow(false);
  }

  return (
    <div>
      {show && (
        <div style={{ display: "flex", background: "#3772FF", color: "white", padding: "0.5rem",  }}>
          <p style={{ textAlign: "center", flex: "1", marginTop:"0.5rem" }}>
            Welcome to muon
          </p>
          <CloseButton style={{ alignSelf: "center", marginRight: "1rem" }} onClick={closeBtn} />
        </div>
      )}
    </div>
  );
}
