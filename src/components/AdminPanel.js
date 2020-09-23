import React from "react";
import HeadBar from "./HeadBar";
import SideBar from "./SideBar";
import UserChart from "./UserChart";
import Analytics from "./Analytics";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";

function AdminPanel() {
  return (
    <div className="App">
     
      <SideBar />
     <UserChart/>
     <Analytics/>
     <BarGraph/>
     <LineGraph/>
    </div>
  );
}

export default AdminPanel;
