import React, { useState } from "react";
import Jam3yatList from "./Jam3yatList";
import SearchBar from "./SearchBar";
import jam3yatStore from "../Stores/jam3yatStore";
import { observer } from "mobx-react";

function Dashboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const [query, setQuery] = useState("");
  const [IsCheckboxChecked, setIsCheckboxChecked] = useState(false);

  return (
    <>
      <div className="pt-5 mt-5 container col-12 ">
        <div className="row">
          <div className="side-bar col-3">
            <button
              className="btn button2-halloween text-halloween"
              onClick={openModal}
            >
              Create
            </button>
            <SearchBar
              setQuery={setQuery}
              setIsCheckboxChecked={setIsCheckboxChecked}
            />
          </div>
          <div className="content col-9">
            <Jam3yatList
              query={query}
              setDetails={props.setDetails}
              isOpen={isOpen}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(Dashboard);
