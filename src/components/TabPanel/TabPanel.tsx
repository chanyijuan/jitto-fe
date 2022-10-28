import React from "react";
// Intefaces
import { TabPanelProps } from "./interfaces";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, hidden, ...other } = props;

  return (
    <div
      style={{
        width: 'auto',
        padding: '30px',
        backgroundColor: "lavender",
        height: "500px",
        overflowY: "auto",
        display: hidden ? "none" : "flex",
        alignItems: "center"
      }}
      role="tabpanel"
      // hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && 
        <>
          {children}
        </>
      }
    </div>
  );
};

export default TabPanel;
