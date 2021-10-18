import React from "react";
import jam3yatStore from "../Stores/jam3yatStore";
import Jam3yaItem from "./Jam3yaItem";

function Jam3yatList() {
  const fetchedJam3yat = jam3yatStore.jam3yat.map((Jam3ya) => (
    <Jam3yaItem Jam3ya={Jam3ya} />
  ));

  return <div>{fetchedJam3yat}</div>;
}

export default Jam3yatList;
