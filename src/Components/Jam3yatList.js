import React, { useState } from "react";
import jam3yatStore from "../Stores/jam3yatStore";
import Jam3yaItem from "./Jam3yaItem";
import CreateJam3yaModal from "./CreateJam3yaModal";

function Jam3yatList(props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const fetchedJam3yat = jam3yatStore.jam3yat.map((Jam3ya) => (
    <div className="col">
      <Jam3yaItem Jam3ya={Jam3ya} />
    </div>
  ));

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div>
        <button onClick={openModal}>Create</button>
        <CreateJam3yaModal isOpen={isOpen} closeModal={closeModal} />
      </div>
      {fetchedJam3yat}
    </div>
  );
}

export default Jam3yatList;
