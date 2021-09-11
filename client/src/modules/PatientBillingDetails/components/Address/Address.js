import React from "react";
import { Wrapper } from "./Address.styles";
import City from "./components/City";
import Country from "./components/Country";
import State from "./components/State";
import StreetAddress from "./components/StreetAddress";
import Zipcode from "./components/Zipcode";

function Address() {
  return (
    <Wrapper>
      <StreetAddress />
      <div>
        <City />
        <State />
      </div>
      <div>
        <Zipcode />
        <Country />
      </div>
    </Wrapper>
  );
}

export default React.memo(Address);
