import React from "react";
import Jam3yatList from "./Jam3yatList";

function Dashboard(props) {
  return (
    <>
      <div className="container col-12">
        <div className="row">
          <div className="side-bar col-3">Sidebar</div>
          <div className="content col-9">
            <Jam3yatList setDetails={props.setDetails} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
